import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seller  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  email: string;

  @Column('text')
  cpf: string;

  @Column('text')
  password: string;
  
  @Column()
  isAdmin: boolean;
}

