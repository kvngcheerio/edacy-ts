/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  console.log(`Live at http://localhost:${process.env.PORT}`)

  await app.listen(process.env.PORT || 3001);
};

bootstrap();
