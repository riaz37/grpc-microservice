import { PRODUCTS_PACKAGE_NAME } from '@my-workspace/types/proto/products';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: PRODUCTS_PACKAGE_NAME,
        protoPath: join(__dirname, 'proto/products.proto'),
      },
    }
  );
  await app.listen();
  Logger.log(`Microservice is listening ...`);
}

bootstrap();
