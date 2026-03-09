import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  getAll() {
    return this.productRepository.findAll();
  }

  create(data: { name: string; price: number }) {
    return { message: 'Product created', data: data };
  }
}
