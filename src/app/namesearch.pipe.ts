import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './model/Student';

@Pipe({
  name: 'namesearch'
})
export class NamesearchPipe implements PipeTransform {

  transform(Students: Student[], searchStr: string): Student[] {
    return Students.filter(student =>
      student.Name.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase()));
  }

}
