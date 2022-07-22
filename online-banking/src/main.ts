import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalExceptionFilter } from './filters/http-exception.filter';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { otelSDK } from './tracing';
import * as fs from 'fs';

async function bootstrap() {
  await otelSDK.start();

  // * HTTPS
  const httpsOptions = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
  };

  if (!httpsOptions.key || !httpsOptions.cert) {
    throw new Error('Failed to load HTTPS options');
  }
  const logger = new Logger();
  const nestApp = await NestFactory.create(AppModule, {
    httpsOptions,
    cors: true,
  });

  nestApp.setGlobalPrefix('v1');
  nestApp.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('OnlineBanking API')
    .setDescription('Super easy online banking API 💵')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(nestApp, config);
  SwaggerModule.setup('api', nestApp, document);
  nestApp.useGlobalFilters(new GlobalExceptionFilter());
  nestApp.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const configService = nestApp.get(ConfigService);
  await nestApp.listen(configService.get('API_PORT'));
  logger.log(`App listening on ${configService.get('API_PORT')}`);
}
bootstrap();
