import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 500 })
  name: string;
  
  @Column('text')
  description: string;

  @Column()
  price: number;
  
  @Column('text')
  type: string;  

  @Column('text')
  status: string; 

  @Column('text')
  city: string;

  @Column('text')
  state: string;

  @Column('text')
  neighborhood: string;

  @Column()
  forRent: boolean;

  @Column()
  isSold: boolean;

  @Column()
  propertyType: string;

  @Column()
  hvac: boolean;
  
  @Column()
  garages: number;
  
  @Column()
  garden: boolean;
  
  @Column()
  playground: boolean;
  
  @Column()
  elevator: boolean;
  
  @Column()
  swimmimgpool: boolean;
  
  @Column()
  parking: boolean;
  
  @Column()
  ceilingHeight: number;
}
