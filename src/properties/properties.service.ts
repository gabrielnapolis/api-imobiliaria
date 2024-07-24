import { Inject, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/find-property.dto';
import { Repository } from 'typeorm';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject('PROPERTY_REPOSITORY',)
    private propertyRepository: Repository<Property>,
  ) {}
  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepository.insert(createPropertyDto);
  }

  findAll() {
    return this.propertyRepository.find()
  }
  findSales(args:any) {
   const  {    
    neighborhood,
      city,
      propertyType,
      minValue,
          maxValue,

        } =args;
    return this.propertyRepository.find({
      where: {
          neighborhood,
          city,
          propertyType,

          isSold:false,
          forRent:false
        
      },
  });
  }
  findRent(args:any) {
    const  {    
     neighborhood,
       city,
       propertyType,
       minValue,
           maxValue,
           rooms,
         } =args;
     return this.propertyRepository.find({
       where: {
           neighborhood,
           city,
           propertyType,
  
           isSold:false,
           forRent:false
         
       },
   });
   }
 
  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
