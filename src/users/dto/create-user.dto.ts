
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateUserDto {
    @PrimaryGeneratedColumn()
    id:number

    email:string

    password:string
}
