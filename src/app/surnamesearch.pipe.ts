import { Pipe, PipeTransform } from '@angular/core';
import { HouseResident } from './model/HouseResident';

@Pipe({
  name: 'surnamesearch'
})
export class SurnamesearchPipe implements PipeTransform {

  transform(HouseResidents: HouseResident[], searchStr: string): HouseResident[] {
    return HouseResidents.filter(houseRedisent =>
      houseRedisent.Surname.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase()));
  }

}
