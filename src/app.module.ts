import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { PetController } from './pet/pet.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, PetController],
  providers: [AppService],
})
export class AppModule {}
