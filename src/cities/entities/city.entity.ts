import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 2 })
  state: string;

}

