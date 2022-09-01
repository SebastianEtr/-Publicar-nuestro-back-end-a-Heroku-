import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
//import { PetService } from './pet.service';
import { PetService } from './pet.service';

@Module({
  imports: [PetModule],
    controllers: [PetController],
    providers: [PetService],
  })
export class PetModule {}
