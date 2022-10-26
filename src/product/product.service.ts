import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/Product';
import { ProductDto } from '../dto/ProductDto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(code: string): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ code });
    console.log(`ProductService findOne... ${JSON.stringify(product)}`);
    return product;
  }

  async save(productoDto: ProductDto): Promise<Product> {
    console.log(`ProductService save... ${JSON.stringify(productoDto)}`);
    const product = new Product();
    product.code = productoDto.code;
    product.name = productoDto.name;
    product.price = productoDto.price;
    product.brand = productoDto.brand;
    product.location = productoDto.location;
    product.quality = productoDto.quality;
    product.dateAt = productoDto.dateAt;
    product.schedule = productoDto.schedule;
    return await this.productsRepository.save(product);
  }

  async remove(code: string): Promise<void> {
    await this.productsRepository.delete(code);
  }
}
