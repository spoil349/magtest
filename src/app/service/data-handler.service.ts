import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { TestData } from '../data/TestData';
import { HouseResident } from '../model/HouseResident';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  fromDate$ = new BehaviorSubject<string>('1993-01-01');
  toDate$ = new BehaviorSubject<string>('1997-01-01');
  nameSearch$ = new BehaviorSubject<string>('');

  fromCheckInDate$ = new BehaviorSubject<string>('1970-01-01');
  toCheckInDate$ = new BehaviorSubject<string>('2000-01-01');
  surnameSearch$ = new BehaviorSubject<string>('');


  constructor() { }

  getStudents(): Student[] {
    return TestData.students;
  }

  getHouseResidents(): HouseResident[] {
    return TestData.houseResidents;
  }
}
