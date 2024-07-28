import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login (email:string,password:string) {
   const user = await this.userRepository.findOne({where:{email:email}});
   if(!user){
     throw new Error("Not Found");
     
   }
   if (user && user.password === password) {
    const { password, ...result } = user;
    return {
      access_token: this.jwtService.sign(result),
    };
  } else {
    throw new Error("Password does not match");
    
  }
   
  }
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) : Promise<User> {
    return this.userRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id,updateUserDto);
  }

  async remove(id: number) {
    return this.userRepository.delete(id);
  }
}
