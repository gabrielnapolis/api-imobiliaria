import { Inject, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FindPropertyDto } from './dto/find-property.dto';
import { Between, LessThanOrEqual, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { Property } from './entities/property.entity';
import { UpdatePropertyDto } from './dto/update-property.dto';
import formidable, {errors as formidableErrors} from 'formidable';
import { Photo } from './entities/photo.entity';
import * as fs from 'fs'; 
@Injectable()
export class PropertiesService {
  constructor(
    @Inject('PROPERTY_REPOSITORY')
    private propertyRepository: Repository<Property>,
    @Inject('PROPERTY_PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

   parsefile = async (req) => {
    return new Promise((resolve, reject) => {
        let options = {
            maxFileSize: 100 * 1024 * 1024, //100 MBs converted to bytes,
            allowEmptyFiles: false
        }

        const form = formidable(options);
        console.log(req)

        form.parse(req, (err, fields, files) => {});
    })
}
  async create(createPropertyDto: CreatePropertyDto) {
    return await this.propertyRepository.insert(createPropertyDto);
  }
  async savePhoto( propertyId:number, path:string) {
    let property = await this.propertyRepository.findOneBy({id:propertyId});
    const photoDto={path:path,property:property}
   return await this.photoRepository.insert(photoDto);
  }

  findAll() {
    return this.propertyRepository.find({relations: {
      photos: true,
  }});
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
      }, relations: {
        photos: true,
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
    return await this.propertyRepository.findOne({ where:{id},relations: {
      photos: true,
    }});
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return await this.propertyRepository.update(id, updatePropertyDto);
  }

  async remove(id: number) {
    let propetyPhotos = await this.photoRepository.findBy({
      property: { id: id },
    });
    propetyPhotos.forEach(async (photo) => {
      await this.removePhoto(photo.id);
      this.removeFromDisk(photo.path);
    });
    return await this.propertyRepository.delete(id);
  }

  async removePhoto(id: number) {
    let photo = await this.photoRepository.findOneBy({id})
    this.removeFromDisk(photo.path);
    return await this.photoRepository.delete(id);
  }

  removeFromDisk(path: string){
    fs.unlink('./uploads/' + path, (err => {
        if (err) console.log(err);
      }));
  }
}
