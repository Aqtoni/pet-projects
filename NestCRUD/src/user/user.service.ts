import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto, UpdatePasswordDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    const { email, ...rest } = dto;
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...rest,
        email: email.toLowerCase(),
      },
    });

    delete user.password;

    return user;
  }

  async updatePassword(userId: number, dto: UpdatePasswordDto) {
    if (!dto.old_password) {
      throw new ForbiddenException('old_password is required.');
    }

    const oldUser = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    const pwValid = await argon.verify(oldUser.password, dto.old_password);

    if (!pwValid) throw new ForbiddenException('Invalid credentials');

    const new_password = await argon.hash(dto.password);

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: new_password,
      },
    });

    delete user.password;

    return user;
  }
}
