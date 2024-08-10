import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './create-property.dto';

export class FindPropertyDto {
  name: string;

  description: string;

  price: number;

  status: string;

  city: string;

  state: string;

  neighborhood: string;

  streetAdress: string;

  mts: number;

  selectedBedrooms: number;

  selectedBathrooms: number;

  kitchen: number;

  propertyType: string;

  classification: string;

  hvac: boolean;

  garages: number;

  garden: boolean;

  playground: boolean;

  elevator: boolean;

  swimmimgpool: boolean;

  parking: boolean;

  ceilingHeight: number;

  constructionYear: number;

  security: string;

  pcdAccess: boolean;

  furnished: boolean;

  wifi: boolean;

  petAllowed: boolean;

  gym: boolean;

  grill: boolean;

  minValue: number;

  maxPrice: number;
}
