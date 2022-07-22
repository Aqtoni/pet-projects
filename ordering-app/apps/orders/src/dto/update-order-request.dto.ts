import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsPhoneNumber,
} from 'class-validator';

export class UpdateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsPositive()
  price?: number;

  @IsPhoneNumber()
  phoneNumber?: string;
}
