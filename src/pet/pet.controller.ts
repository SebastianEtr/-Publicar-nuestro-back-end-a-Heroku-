import { Body, Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
//import { PetService } from "../pet/pet.service";
//import { fetch } from "node-fetch";
import { fetch} from 'cross-fetch';
import { param } from 'jquery';


@Controller('pet')
export class PetController {
  //constructor(private readonly PetService: PetService) {}
  
@Get()
@HttpCode(200)
getPackedSettings( ) {
 /*return this.PetService.GetCategory();*/

 return  Promise.all([
  fetch("https://bsl1.herokuapp.com/pet"),
  fetch("https://bsl1.herokuapp.com/pet/categories")
])
.then(values => {
    // pets.then(data => console.log(data))
  // petCategories.then(data => console.log(data))
  Promise.all([values[0].json(), values[1].json()]).then(values => {

      const pets =  values[0]// -> []
      const petCategories =  values[1]// -> {}
    
    console.log(petCategories.categories)
    
    
    const mappedPets = pets.map((pet) => {
      const matchedCategory = petCategories.categories
          .find((category) => category.id === pet.category)
      
      return {
        ...pet,
        category: matchedCategory.name
      }
    })
    console.log(mappedPets)
  })
})
}

}
