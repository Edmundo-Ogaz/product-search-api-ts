import { LocationDto } from './Location';

export class ProductDto {
  code: string;
  name: string;
  price: number;
  brand: string;
  location: LocationDto;
  quality: number;
  dateAt: Date;
  schedule: string;
}
