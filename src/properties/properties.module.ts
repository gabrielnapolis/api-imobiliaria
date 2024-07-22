import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],

})
export class PropertiesModule {}
