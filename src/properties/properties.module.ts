import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { databaseProviders } from 'src/database/database.providers';
import { DatabaseModule } from 'src/database/database.module';
import { propertyProviders } from './properties.providers';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [DatabaseModule,MulterModule.register({
    dest: './upload',
  })],
  controllers: [PropertiesController],
  providers: [...propertyProviders ,PropertiesService],

})
export class PropertiesModule {}
