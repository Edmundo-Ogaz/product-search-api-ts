import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from '../interface/Location';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column({ name: 'name' })
  name: string;

  @Column()
  price: number;

  @Column()
  brand: string;

  @Column({ type: 'json' })
  location: Location;

  @Column()
  quality: number;

  @Column({ type: 'datetime' })
  dateAt: Date;

  @Column()
  schedule: string;
}
