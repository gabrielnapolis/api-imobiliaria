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
  status: string;
  
  @Column()
  constructionYear: number;
  
  @Column('text')
  propertyType: string;

  @Column('text')
  city: string;
  
  @Column('text')
  state: string;

  @Column('text')
  neighborhood: string;

  @Column('text')
  streetAdress: string;

  @Column()
  mts: number;

  @Column()
  bed: number;

  @Column()
  bath: number;

  @Column()
  kitchen: number;

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

  @Column('text')
  security: string;

  @Column()
  pcdAccess: boolean;

  @Column()
  furnished: boolean;

  @Column()
  wifi: boolean;

  @Column()
  petAllowed: boolean;

  @Column()
  gym: boolean;

  @Column()
  grill: boolean;
}
