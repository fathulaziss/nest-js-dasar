import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './create-products.dto';

@Injectable()
export class ProductRepository {
  private product = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'Acil' },
  ];

  findAll() {
    return this.product;
  }

  create(product: CreateProductsDto) {
    return {
      message: 'Create a product',
      data: {
        name: product.name,
        price: product.price,
      },
    };
  }
}
