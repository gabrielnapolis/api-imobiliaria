import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './create-property.dto';

export class FindPropertyDto {
  name: string;

  description: string;

  city: string;

  state: string;

  neighborhood: string;

  forRent: boolean;

  isSold: boolean;

  propertyType: string;

  hvac: boolean;

  garages: number;

  garden: boolean;

  playground: boolean;

  elevator: boolean;

  swimmimgpool: boolean;

  parking: boolean;

  ceilingHeight: number;

  price: number;
  minValue: number;
  maxValue: number;
}
