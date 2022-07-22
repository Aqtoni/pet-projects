import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './strategy/Guards';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  login() {
    return { msg: 'Google Authentication' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  redirect(@Res() res) {
    res.redirect('http://localhost:3001/api/auth');
  }

  @Get('user')
  @UseGuards(GoogleAuthGuard)
  user(@Req() request: Request) {
    console.log(request.user);
    if (request.user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}
