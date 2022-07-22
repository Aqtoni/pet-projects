import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the user',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Anton', description: 'The first name of the user' })
  @Column()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Kovtun', description: 'The last name of the user' })
  @Column()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: 'Anton Kovtun',
    description: 'The full name of the user',
  })
  @Expose({ name: 'fullName' })
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  @ApiProperty({
    example: 'anton@example.com',
    description: 'The email of the user',
  })
  @Column({ unique: true })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'super-secret-password 😏',
    description: 'The password of the user',
    minLength: 10,
  })
  @Column()
  @IsNotEmpty()
  @MinLength(10)
  @Exclude()
  password: string;

  @ApiProperty({
    example: 'This a secret 😏',
    description: 'The refresh tokens in the database',
  })
  @Column({
    nullable: true,
  })
  @Exclude()
  currentHashedRefreshToken?: string;

  @ApiProperty({
    example: '+123123123123',
    description: 'Has to match a regular expression: /^\\+[1-9]\\d{1,14}$/',
  })
  @IsString()
  @IsNotEmpty()
  @Column()
  phoneNumber: string;

  @ApiProperty({
    example: 1000,
    description: 'The current balance of the user',
  })
  @Column({ default: 0 })
  balance: number;

  @ApiProperty({
    example: '2023-01-01T00:00:00',
    description: 'The date and time the user was created',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: '2023-02-01T00:00:00',
    description: 'The date and time the user was last updated',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
