import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';
import { PetModule } from './pet/pet.module';

@Module({
imports: [PetModule],
  controllers: [AppController, HealthController, PetController],
  providers: [AppService],
})
export class AppModule {}
