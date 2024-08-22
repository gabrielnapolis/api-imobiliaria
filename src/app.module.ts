import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CitiesModule } from './cities/cities.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [   ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
  }),PropertiesModule, DatabaseModule, UsersModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
