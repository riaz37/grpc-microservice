import {
  ProductRequest,
  ProductResponse,
  ProductsServiceController,
  ProductsServiceControllerMethods,
} from '@my-workspace/types/proto/products';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('product')
@ProductsServiceControllerMethods()
export class ProductController implements ProductsServiceController {
  getProducts(
    request: ProductRequest
  ): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productId: request.productId,
      name: 'Product 1',
      price: 100,
    };
  }
}
