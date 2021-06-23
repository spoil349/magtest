import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Student } from '../../model/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  nameSearch: string = '';
  fromDate: string = '1993-01-01';
  toDate: string = '1997-01-01';

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.students = this.dataHandler.getStudents();
    this.dataHandler.fromDate$.subscribe(fromDate$ => this.fromDate = fromDate$);
    this.dataHandler.toDate$.subscribe(toDate$ => this.toDate = toDate$);
    this.dataHandler.nameSearch$.subscribe(nameSearch$ => this.nameSearch = nameSearch$);
  }

  clearFiltersStudents() {
    this.nameSearch = '';
    this.dataHandler.fromDate$.next('1993-01-01');
    this.dataHandler.toDate$.next('1997-01-01');
    this.dataHandler.nameSearch$.next('');
  }

  changeFromDate() {
    this.dataHandler.fromDate$.next(this.fromDate);
  }

  changeToDate() {
    this.dataHandler.toDate$.next(this.toDate);
  }

  changeNameSearch() {
    this.dataHandler.nameSearch$.next(this.nameSearch);
  }
}
