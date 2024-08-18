import { DataSource } from 'typeorm';
import { Property } from './entities/property.entity';
import { Photo } from './entities/photo.entity';

export const propertyProviders = [
  {
    provide: 'PROPERTY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Property),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PROPERTY_PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: ['DATA_SOURCE'],
  },
];