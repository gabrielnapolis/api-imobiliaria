import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Amenity {
    @PrimaryGeneratedColumn()
    @Column()
    id: number;
   
    
}
