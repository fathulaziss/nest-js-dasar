import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductRepository } from './product.repository';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
  imports: [AuthModule, PrismaModule],
})
export class ProductsModule {}
