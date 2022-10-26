import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../entity/Product';
import { ProductDto } from '../dto/ProductDto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('/')
  getAll(): Promise<Product[]> {
    console.log('ProductController getAll...');
    return this.productService.findAll();
  }

  @Get('/:code')
  async getBy(@Param('code') code: string): Promise<Product> {
    console.log('ProductController getBy...');
    const product = await this.productService.findOne(code);
    console.log(`ProductController getBy... ${JSON.stringify(product)}`);
    return product;
  }

  @Post('/')
  save(@Body() productDto: ProductDto) {
    console.log(`ProductController save... ${JSON.stringify(productDto)}`);
    return this.productService.save(productDto);
  }
}
