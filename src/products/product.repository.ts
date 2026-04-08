import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from './create-products.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.product.findMany();
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
