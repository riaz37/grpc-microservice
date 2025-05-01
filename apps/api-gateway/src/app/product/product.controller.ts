import {
  PRODUCTS_PACKAGE_NAME,
  PRODUCTS_SERVICE_NAME,
  ProductsServiceClient,
} from '@my-workspace/types/proto/products';
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('product')
export class ProductController implements OnModuleInit {
  private productsService: ProductsServiceClient;
  constructor(@Inject(PRODUCTS_PACKAGE_NAME) private client: ClientGrpc) {}
  onModuleInit() {
    this.productsService = this.client.getService<ProductsServiceClient>(
      PRODUCTS_SERVICE_NAME
    );
  }

  @Get()
  findOne() {
    return this.productsService.getProducts({ productId: 1 });
  }
}
