import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger();
  const API_PORT = 3003;
  await app.listen(API_PORT);

logger.log(`App listening on ${API_PORT}`);
  // Gracefully shutdown the server.
  app.enableShutdownHooks();
}
bootstrap();
