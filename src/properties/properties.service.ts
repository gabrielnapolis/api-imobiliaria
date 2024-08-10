import { Inject, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FindPropertyDto } from './dto/find-property.dto';
import { Between, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject('PROPERTY_REPOSITORY')
    private propertyRepository: Repository<Property>,
  ) {}
  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepository.insert(createPropertyDto);
  }

  findAll() {
    return this.propertyRepository.find();
  }
 async findProperty(args: FindPropertyDto) {
    const {
    //  search,
      neighborhood,
      city,
      selectedBedrooms,
      selectedBathrooms,
      propertyType,
      minValue,
      maxPrice,
      mts,
      swimmimgpool,
      security,
      pcdAccess,
      petAllowed,
      // forRent,
    } = args;
    console.log(args)
    let result=await this.propertyRepository.find({
      where: {
        city,
        bed:MoreThanOrEqual(selectedBedrooms),
        bath: MoreThanOrEqual(selectedBathrooms),
        propertyType,
        mts: MoreThanOrEqual(mts),
        swimmimgpool,
        security,
        pcdAccess,
        petAllowed,
        // forRent,
        price:LessThanOrEqual(maxPrice),
      },
    //  order: {},
    });
    console.log("findProperty result",result)
    
    return result
  }
  findRent() {
    return this.propertyRepository.find({
      where: {
        //  isSold:false,
        //  forRent:true
      },
    });
  }

  findForSale() {
    return this.propertyRepository.find({
      where: {
        // isSold:false,
        // forRent:false
      },
    });
  }

  async findOne(id: number) {
    return await this.propertyRepository.findOneBy({ id });
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return await this.propertyRepository.update(id, updatePropertyDto);
  }

  async remove(id: number) {
    return await this.propertyRepository.delete(id);
  }
}
