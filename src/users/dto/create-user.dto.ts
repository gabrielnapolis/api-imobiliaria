
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateUserDto {
    @PrimaryGeneratedColumn()
    id:number

    email:string

    password:string

    cpf: string;

    isAdmin: boolean;
}
