import { Pipe, PipeTransform } from '@angular/core';
import { HouseResident } from './model/HouseResident';

@Pipe({
  name: 'checkindatesearch'
})
export class CheckindatesearchPipe implements PipeTransform {

  transform(HouseResidents: HouseResident[], fromCheckInDate: string, toCheckInDate: string): HouseResident[] {
    return HouseResidents.filter(houseResident =>
      houseResident.CheckInDate.getTime() > (new Date(fromCheckInDate).getTime()) &&
      houseResident.CheckInDate.getTime() < (new Date(toCheckInDate).getTime()));
  }

}
