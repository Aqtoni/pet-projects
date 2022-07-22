import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60 * 24 * 30 },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.setGlobalPrefix('api');
  await app.listen(3001);
}
bootstrap();
