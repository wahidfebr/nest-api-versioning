import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const HOST = 'localhost';
  const PORT = 3000;

  // Express HTTP Server
  // const app = await NestFactory.create(AppModule);

  // Fastify HTTP Server
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(PORT, HOST, () => {
    console.log(`NEST running at http://${HOST}:${PORT}`);
  });
}
bootstrap();
