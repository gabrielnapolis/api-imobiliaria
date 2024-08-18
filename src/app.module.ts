import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CitiesModule } from './cities/cities.module';


@Module({
  imports: [PropertiesModule, DatabaseModule, UsersModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
