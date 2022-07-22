import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  // config: any;
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hashedPassword = await argon.hash(dto.password);
    // save the new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });

      const accessToken = await this.assignAccessToken(user.id);
      return {
        tokens: { access: accessToken },
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email is already taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.password, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    delete user.password;

    const accessToken = await this.assignAccessToken(user.id);
    const refreshToken = await this.assignRefreshToken(user.id);

    return {
      user,
      tokens: { access: accessToken, refresh: refreshToken },
    };
  }

  async assignAccessToken(userId: number): Promise<string> {
    const payload = { sub: userId };
    const accessTokenSecret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      secret: accessTokenSecret,
      expiresIn: '10m',
    });

    return token;
  }

  async assignRefreshToken(userId: number): Promise<string> {
    const payload = { sub: userId };
    const accessTokenSecret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      secret: accessTokenSecret,
      expiresIn: '7d',
    });

    return token;
  }
}
