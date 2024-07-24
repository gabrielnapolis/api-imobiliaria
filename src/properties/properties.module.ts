import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { propertyProviders } from './properties.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PropertiesController],
  providers: [...propertyProviders ,PropertiesService],

})
export class PropertiesModule {}
