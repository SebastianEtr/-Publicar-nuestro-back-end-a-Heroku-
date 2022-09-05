import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';
import { PetModule } from './pet/pet.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
imports: [PetModule,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  }),],
  controllers: [AppController, HealthController, PetController],
  providers: [AppService],
})
export class AppModule {}
