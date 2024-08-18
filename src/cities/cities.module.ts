import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { citiesProviders } from './cities.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CitiesController],
  providers: [...citiesProviders,CitiesService],
})
export class CitiesModule {}
