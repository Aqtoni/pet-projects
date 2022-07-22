import { Controller, Get, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from '@app/common';

@Controller()
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.billingService.bill(data);
    this.rmqService.ack(context);
  }

  @EventPattern('order_updated')
  @UseGuards(JwtAuthGuard)
  async handleOrderUpdate(@Payload() data: any, @Ctx() context: RmqContext) {
    this.billingService.update(data);
    this.rmqService.ack(context);
  }

  @EventPattern('order_deleted')
  @UseGuards(JwtAuthGuard)
  async handleOrderDelete(@Payload() data: any, @Ctx() context: RmqContext) {
    this.billingService.delete(data);
    this.rmqService.ack(context);
  }
}
