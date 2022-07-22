import { Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderRequest } from './dto/create-order.request';
import { BILLING_SERVICE } from '../constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { UpdateOrderRequest } from './dto/update-order-request.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async createOrder(request: CreateOrderRequest, authentication: string) {
    const session = await this.ordersRepository.startTransaction();
    try {
      const order = await this.ordersRepository.create(request, { session });
      await lastValueFrom(
        this.billingClient.emit('order_created', {
          request,
          Authentication: authentication,
        }),
      );
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }

  async updateOrder(
    orderId: string,
    updateOrderDto: UpdateOrderRequest,
    authentication: string,
  ) {
    const session = await this.ordersRepository.startTransaction();
    try {
      const order = await this.ordersRepository.upset(
        { _id: orderId },
        { $set: updateOrderDto },
        { session },
      );
      await lastValueFrom(
        this.billingClient.emit('order_updated', {
          request: updateOrderDto,
          Authentication: authentication,
        }),
      );
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async deleteOrder(orderId: string, authentication: string) {
    const session = await this.ordersRepository.startTransaction();
    try {
      const order = await this.ordersRepository.delete(
        { _id: orderId },
        { session },
      );
      await lastValueFrom(
        this.billingClient.emit('order_deleted', {
          _id: orderId,
          Authentication: authentication,
        }),
      );
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }
}
