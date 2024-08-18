import { Inject, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FindPropertyDto } from './dto/find-property.dto';
import { Between, LessThanOrEqual, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { UpdatePropertyDto } from './dto/update-property.dto';
import formidable, {errors as formidableErrors} from 'formidable';
@Injectable()
export class PropertiesService {
  constructor(
    @Inject('PROPERTY_REPOSITORY')
    private propertyRepository: Repository<Property>,
  ) {}

   parsefile = async (req) => {
    return new Promise((resolve, reject) => {
        let options = {
            maxFileSize: 100 * 1024 * 1024, //100 MBs converted to bytes,
            allowEmptyFiles: false
        }

        const form = formidable(options);

        form.parse(req, (err, fields, files) => {});
    })
}
  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepository.insert(createPropertyDto);
  }

  findAll() {
    return this.propertyRepository.find();
  }
 async findProperty(args: FindPropertyDto) {
    let {
    //  search,
    location,
    classification,
    status,
      search,
      neighborhood,
      city,
      selectedBedrooms,
      selectedBathrooms,
      propertyType,
      minPrice,
      maxPrice,
      mts,
      swimmimgpool,
      security,
      pcdAccess,
      petAllowed,
      // forRent,
    } = args;
    console.log(args)
    if(!mts) mts=1
    if(!maxPrice) mts=100000000
    if(!selectedBathrooms) selectedBathrooms=1
    if(!selectedBedrooms) selectedBedrooms=1
    let searchObject = {
      //  description:Like(search),
    //    name:Like(search),
          classification,
          city:location,
          bed:MoreThanOrEqual(selectedBedrooms),
          bath: MoreThanOrEqual(selectedBathrooms),
          propertyType,
          mts: MoreThanOrEqual(mts),
          swimmimgpool,
          security,
          pcdAccess,
          petAllowed,
          status,
          price:LessThanOrEqual(maxPrice),
        }
    let result=await this.propertyRepository.find({
      where: {
    //    description:Like(search),
  //      name:Like(search),
        classification,
        city:location,
        bed:MoreThanOrEqual(selectedBedrooms),
        bath: MoreThanOrEqual(selectedBathrooms),
        propertyType,
        mts: MoreThanOrEqual(mts),
        swimmimgpool,
        security,
        pcdAccess,
        petAllowed,
        status,
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
