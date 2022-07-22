/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../app.service';
import { User } from '../entities/user.entities';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AuthSvGoogle') private readonly authService: AuthService,
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log('Serializer User');
    done(null, user.id);
  }

  async deserializeUser(payload: number, done: Function) {
    const user = await this.authService.findUser(payload);
    console.log('Deserialize User');
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}
