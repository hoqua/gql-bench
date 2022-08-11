/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const adapter =  new FastifyAdapter({logger: {
    level: 'debug',

    }});
  adapter.enableCors({
    origin: true,
  })

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter
  );
  const globalPrefix = 'graphql';
  const port = process.env.PORT || 80;

  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
