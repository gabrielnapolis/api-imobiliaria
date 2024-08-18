import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  path: string;


  @ManyToOne(() => Property, (property) => (property.photos))
  property: Property
  
}
