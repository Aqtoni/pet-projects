import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderRequest } from './dto/create-order.request';
import { JwtAuthGuard } from '@app/common';
import { UpdateOrderRequest } from './dto/update-order-request.dto';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: CreateOrderRequest, @Req() req: any) {
    console.log(req.user);
    return this.ordersService.createOrder(request, req.cookies?.Authentication);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }

  @Patch(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() request: UpdateOrderRequest,
    @Req() req: any,
  ) {
    return this.ordersService.updateOrder(
      id,
      request,
      req.cookies?.Authentication,
    );
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string, @Req() req: any) {
    return this.ordersService.deleteOrder(id, req.cookies?.Authentication);
  }
}
