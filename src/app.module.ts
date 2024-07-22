import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { UsersModule } from './users/users.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [PropertiesModule, UsersModule, AmenitiesModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
