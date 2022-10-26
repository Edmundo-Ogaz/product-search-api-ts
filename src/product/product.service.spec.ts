import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Product } from '../entity/Product';
import { ProductService } from './product.service';

describe('ProductService', () => {
  const resp: Array<Product> = [new Product()];
  let service: ProductService;
  const mock = {
    find: jest.fn().mockImplementation(() => {
      return resp;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
