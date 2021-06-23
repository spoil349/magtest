import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './model/Student';

@Pipe({
  name: 'birthdaysearch'
})
export class BirthdaysearchPipe implements PipeTransform {

  transform(Students: Student[], fromDate: string, toDate: string): Student[] {
    return Students.filter(student =>
      student.Birthday.getTime() > (new Date(fromDate).getTime()) &&
      student.Birthday.getTime() < (new Date(toDate).getTime()));
  }

}
