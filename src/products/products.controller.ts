import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './create-products.dto';
import { JwtAuthGuard } from '../common/jwt-auth.guard';
import type { JwtPayload } from '../common/jwt-auth.guard';
import { CurrentUser } from '../common/current-user.decorator';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return `Product ${id}`;
  }

  @Post()
  create(@Body() createProductDto: CreateProductsDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('get/user')
  getUser(@CurrentUser() user: JwtPayload) {
    return {
      message: 'Success',
      data: user,
    };
  }
}
