export class HouseResident {
  Surname: string;
  CheckInDate: Date;
  PersonsQuantity: number;
  FloorNumber: number;
  ApartmentNumber: number;
  Mobile: number;
  ApartmentArea: number;
  Pin: number;
  SerialNumber: number;
  PId: number;

  constructor(Surname: string, CheckInDate: Date, PersonsQuantity: number, FloorNumber: number, ApartmentNumber: number, Mobile: number, ApartmentArea: number, Pin: number, SerialNumber: number, PId: number) {
    this.Surname = Surname;
    this.CheckInDate = CheckInDate;
    this.PersonsQuantity = PersonsQuantity;
    this.FloorNumber = FloorNumber;
    this.ApartmentNumber = ApartmentNumber;
    this.Mobile = Mobile;
    this.ApartmentArea = ApartmentArea;
    this.Pin = Pin;
    this.SerialNumber = SerialNumber;
    this.PId = PId;
  }
}
