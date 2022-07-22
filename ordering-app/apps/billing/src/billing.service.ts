import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);
  getHello(): string {
    return 'Hello World!';
  }

  bill(data: any) {
    this.logger.log('Billing....', data);
  }
  update(data: any) {
    this.logger.log('Update....', data);
  }
  delete(data: any) {
    this.logger.log('Delete....', data);
  }
}
