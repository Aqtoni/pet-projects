import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../app.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly Config: ConfigService,
    @Inject('AuthSvGoogle') private readonly authService: AuthService,
  ) {
    super({
      clientID: Config.get('GOOGLE_CLIENT_ID'),
      clientSecret: Config.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: Config.get('GOOGLE_REDIRECT_URL'),
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const user = await this.authService.validateUser({
      email: profile.emails[0].value,
      givenName: profile.name.givenName,
      familyName: profile.name.familyName,
      displayName: profile.displayName,
      photoUrl: profile.photos?.[0].value,
    });
    console.log('Validate');
    console.log(user);
    return user || null;
  }
}
