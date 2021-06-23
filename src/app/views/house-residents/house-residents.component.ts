import { Component, OnInit } from '@angular/core';
import { HouseResident } from 'src/app/model/HouseResident';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-house-residents',
  templateUrl: './house-residents.component.html',
  styleUrls: ['./house-residents.component.css']
})
export class HouseResidentsComponent implements OnInit {

  houseResidents: HouseResident[] = [];
  surnameSearch: string = '';
  fromCheckInDate: string = '1970-01-01';
  toCheckInDate: string = '2000-01-01';

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit() {
    this.houseResidents = this.dataHandler.getHouseResidents();
    this.dataHandler.fromCheckInDate$.subscribe(fromCheckInDate$ => this.fromCheckInDate = fromCheckInDate$);
    this.dataHandler.toCheckInDate$.subscribe(toCheckInDate$ => this.toCheckInDate = toCheckInDate$);
    this.dataHandler.surnameSearch$.subscribe(surnameSearch$ => this.surnameSearch = surnameSearch$);

  }

  clearFiltersHouseResidents() {
    this.dataHandler.fromCheckInDate$.next('1970-01-01');
    this.dataHandler.toCheckInDate$.next('2000-01-01');
    this.dataHandler.surnameSearch$.next('');
  }

  changeFromCheckInDate() {
    this.dataHandler.fromCheckInDate$.next(this.fromCheckInDate);
  }

  changeToCheckInDate() {
    this.dataHandler.toCheckInDate$.next(this.toCheckInDate);
  }

  changeSurnameSearch() {
    this.dataHandler.surnameSearch$.next(this.surnameSearch);
  }
}
