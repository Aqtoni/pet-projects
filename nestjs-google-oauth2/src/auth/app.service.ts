import { Injectable } from '@nestjs/common';
import { UserDetails } from './types/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async validateUser(details: UserDetails) {
    console.log('AuthService');
    console.log(details);
    const user = await this.userRepository.findOne({
      where: { email: details.email },
    });
    console.log(user);
    if (user) return user;
    console.log('User not found. Creating...');
    const newUser = await this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }

  async findUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
}
