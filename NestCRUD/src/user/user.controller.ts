import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
import { UpdatePasswordDto } from './dto/user.update.pass.dto';
import { SystemUser } from './interfaces';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: SystemUser) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }

  @Patch('me/password')
  updatePassword(
    @GetUser('id') userId: number,
    @Body() dto: UpdatePasswordDto,
  ) {
    return this.userService.updatePassword(userId, dto);
  }
}
