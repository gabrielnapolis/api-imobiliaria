import { DataSource } from 'typeorm';
import { Seller } from './entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Seller),
    inject: ['DATA_SOURCE'],
  },
];