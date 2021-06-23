export class Student {
  Name: string;
  City: string;
  Sex: string;
  Birthday: Date;
  Mobile: number;

  constructor(Name: string, City: string, Sex: string, Birthday: Date, Mobile: number) {
    this.Name = Name;
    this.City = City;
    this.Sex = Sex;
    this.Birthday = Birthday;
    this.Mobile = Mobile;
  }
}
