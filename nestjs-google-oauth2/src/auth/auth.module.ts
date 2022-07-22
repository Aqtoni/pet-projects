import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/GoogleStrategy';
import { AuthService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionSerializer } from './strategy/Serializer';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entities';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AuthSvGoogle',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
