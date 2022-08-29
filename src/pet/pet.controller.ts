import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { getPackedSettings } from 'http2';

@Controller('pet')
export class PetController {

@Get(":api/pet")
getPackedSettings(){
 return "mascotas"
}

}
