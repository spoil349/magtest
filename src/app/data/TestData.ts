import { HouseResident } from '../model/HouseResident';
import { Student } from '../model/Student';

export class TestData {
  static students: Student[] = [
    {
      Name: 'Nick',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('12.05.1995'),
      Mobile: 89277500582
    },

    {
      Name: 'Kostya',
      City: 'Chapaevsk',
      Sex: 'Male',
      Birthday: new Date('01.21.1996'),
      Mobile: 89273456767
    },

    {
      Name: 'Andrei',
      City: 'Kinel`',
      Sex: 'Male',
      Birthday: new Date('05.05.1995'),
      Mobile: 89274567878
    },

    {
      Name: 'Igor`',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('01.15.1994'),
      Mobile: 89275673245
    },

    {
      Name: 'Evpatii',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('12.13.1994'),
      Mobile: 89271235423
    },

    {
      Name: 'Eugene',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('12.12.1996'),
      Mobile: 89277654332
    },

    {
      Name: 'Jack',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('11.02.1994'),
      Mobile: 89276467678
    },

    {
      Name: 'Tom',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('07.13.1995'),
      Mobile: 89271234546
    },

    {
      Name: 'Viktor',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('11.30.1995'),
      Mobile: 89273452354
    },

    {
      Name: 'Anzhela',
      City: 'Samara',
      Sex: 'Female',
      Birthday: new Date('12.25.1994'),
      Mobile: 89271234355
    },

    {
      Name: 'Katya',
      City: 'Samara',
      Sex: 'Female',
      Birthday: new Date('12.03.1996'),
      Mobile: 89275673465
    },

    {
      Name: 'Pavel',
      City: 'Samara',
      Sex: 'Male',
      Birthday: new Date('10.16.1995'),
      Mobile: 89274567342
    },

    {
      Name: 'Tanya',
      City: 'Samara',
      Sex: 'Female',
      Birthday: new Date('04.14.1996'),
      Mobile: 89271236547
    },

    {
      Name: 'Vika',
      City: 'Samara',
      Sex: 'Female',
      Birthday: new Date('06.15.1994'),
      Mobile: 89274562356
    },

    {
      Name: 'Ksyusha',
      City: 'Samara',
      Sex: 'Female',
      Birthday: new Date('06.12.1996'),
      Mobile: 89274567865
    }
  ]

  static houseResidents: HouseResident[] = [
    {
      Surname: 'Smith',
      CheckInDate: new Date('06.12.1996'),
      PersonsQuantity: 1,
      FloorNumber: 1,
      ApartmentNumber: 1,
      Mobile: 89779813434,
      ApartmentArea: 45,
      Pin: 123765,
      SerialNumber: 5678,
      PId: 345,
    },

    {
      Surname: 'Johnson',
      CheckInDate: new Date('04.12.1970'),
      PersonsQuantity: 2,
      FloorNumber: 1,
      ApartmentNumber: 2,
      Mobile: 89773453463,
      ApartmentArea: 45,
      Pin: 543678,
      SerialNumber: 4568,
      PId: 534,
    },

    {
      Surname: 'Williams',
      CheckInDate: new Date('06.05.1993'),
      PersonsQuantity: 3,
      FloorNumber: 1,
      ApartmentNumber: 3,
      Mobile: 89775672322,
      ApartmentArea: 70,
      Pin: 567854,
      SerialNumber: 2456,
      PId: 645,
    },

    {
      Surname: 'Jones',
      CheckInDate: new Date('08.12.1991'),
      PersonsQuantity: 4,
      FloorNumber: 1,
      ApartmentNumber: 4,
      Mobile: 89775678888,
      ApartmentArea: 90,
      Pin: 567897,
      SerialNumber: 4678,
      PId: 234,
    },

    {
      Surname: 'Brown',
      CheckInDate: new Date('10.15.1991'),
      PersonsQuantity: 1,
      FloorNumber: 2,
      ApartmentNumber: 5,
      Mobile: 89712347654,
      ApartmentArea: 45,
      Pin: 345673,
      SerialNumber: 1345,
      PId: 534,
    },

    {
      Surname: 'Davis',
      CheckInDate: new Date('04.15.1974'),
      PersonsQuantity: 2,
      FloorNumber: 2,
      ApartmentNumber: 6,
      Mobile: 89745679865,
      ApartmentArea: 45,
      Pin: 567834,
      SerialNumber: 8765,
      PId: 756,
    },

    {
      Surname: 'Miller',
      CheckInDate: new Date('10.23.1977'),
      PersonsQuantity: 3,
      FloorNumber: 2,
      ApartmentNumber: 7,
      Mobile: 89745624567,
      ApartmentArea: 70,
      Pin: 567843,
      SerialNumber: 5688,
      PId: 534,
    },

    {
      Surname: 'Wilson',
      CheckInDate: new Date('03.18.1999'),
      PersonsQuantity: 4,
      FloorNumber: 2,
      ApartmentNumber: 8,
      Mobile: 89767456789,
      ApartmentArea: 90,
      Pin: 678943,
      SerialNumber: 2546,
      PId: 576,
    },

    {
      Surname: 'Moore',
      CheckInDate: new Date('06.12.1996'),
      PersonsQuantity: 2,
      FloorNumber: 3,
      ApartmentNumber: 9,
      Mobile: 89745672345,
      ApartmentArea: 45,
      Pin: 123654,
      SerialNumber: 1234,
      PId: 678,
    },

    {
      Surname: 'Taylor',
      CheckInDate: new Date('07.20.1979'),
      PersonsQuantity: 3,
      FloorNumber: 3,
      ApartmentNumber: 10,
      Mobile: 89756734567,
      ApartmentArea: 45,
      Pin: 123658,
      SerialNumber: 8765,
      PId: 456,
    },

    {
      Surname: 'Anderson',
      CheckInDate: new Date('01.25.1991'),
      PersonsQuantity: 4,
      FloorNumber: 3,
      ApartmentNumber: 11,
      Mobile: 89723678765,
      ApartmentArea: 70,
      Pin: 178056,
      SerialNumber: 1345,
      PId: 568,
    },

    {
      Surname: 'Thomas',
      CheckInDate: new Date('06.06.1986'),
      PersonsQuantity: 1,
      FloorNumber: 3,
      ApartmentNumber: 12,
      Mobile: 8974567876,
      ApartmentArea: 90,
      Pin: 590965,
      SerialNumber: 6488,
      PId: 358,
    },

    {
      Surname: 'Jackson',
      CheckInDate: new Date('06.12.1988'),
      PersonsQuantity: 2,
      FloorNumber: 4,
      ApartmentNumber: 1,
      Mobile: 89712346543,
      ApartmentArea: 45,
      Pin: 458765,
      SerialNumber: 2465,
      PId: 568,
    },

    {
      Surname: 'White',
      CheckInDate: new Date('06.08.1986'),
      PersonsQuantity: 3,
      FloorNumber: 4,
      ApartmentNumber: 13,
      Mobile: 89745679876,
      ApartmentArea: 45,
      Pin: 867485,
      SerialNumber: 5867,
      PId: 789,
    },

    {
      Surname: 'Harris',
      CheckInDate: new Date('11.12.1984'),
      PersonsQuantity: 4,
      FloorNumber: 4,
      ApartmentNumber: 14,
      Mobile: 89734562345,
      ApartmentArea: 70,
      Pin: 274867,
      SerialNumber: 2654,
      PId: 456,
    },

    {
      Surname: 'Martin',
      CheckInDate: new Date('02.03.1983'),
      PersonsQuantity: 2,
      FloorNumber: 4,
      ApartmentNumber: 15,
      Mobile: 89734568765,
      ApartmentArea: 90,
      Pin: 857365,
      SerialNumber: 4868,
      PId: 254,
    },

    {
      Surname: 'Thompson',
      CheckInDate: new Date('10.01.1981'),
      PersonsQuantity: 1,
      FloorNumber: 5,
      ApartmentNumber: 16,
      Mobile: 89723458765,
      ApartmentArea: 45,
      Pin: 616784,
      SerialNumber: 2654,
      PId: 457,
    },

    {
      Surname: 'Garcia',
      CheckInDate: new Date('03.12.1980'),
      PersonsQuantity: 3,
      FloorNumber: 5,
      ApartmentNumber: 17,
      Mobile: 89765435678,
      ApartmentArea: 45,
      Pin: 748246,
      SerialNumber: 3756,
      PId: 568,
    },

    {
      Surname: 'Martinez',
      CheckInDate: new Date('05.09.1986'),
      PersonsQuantity: 4,
      FloorNumber: 5,
      ApartmentNumber: 18,
      Mobile: 89756785432,
      ApartmentArea: 70,
      Pin: 927345,
      SerialNumber: 4868,
      PId: 267,
    },

    {
      Surname: 'Robinson',
      CheckInDate: new Date('06.12.1976'),
      PersonsQuantity: 1,
      FloorNumber: 5,
      ApartmentNumber: 19,
      Mobile: 89745673215,
      ApartmentArea: 90,
      Pin: 384583,
      SerialNumber: 6453,
      PId: 698,
    },

    {
      Surname: 'Clark',
      CheckInDate: new Date('07.02.1970'),
      PersonsQuantity: 3,
      FloorNumber: 6,
      ApartmentNumber: 20,
      Mobile: 89756784567,
      ApartmentArea: 45,
      Pin: 618463,
      SerialNumber: 2354,
      PId: 245,
    },

    {
      Surname: 'Rodriguez',
      CheckInDate: new Date('01.03.1995'),
      PersonsQuantity: 2,
      FloorNumber: 6,
      ApartmentNumber: 21,
      Mobile: 89734568769,
      ApartmentArea: 45,
      Pin: 185385,
      SerialNumber: 3675,
      PId: 678,
    },

    {
      Surname: 'Lewis',
      CheckInDate: new Date('06.12.1996'),
      PersonsQuantity: 4,
      FloorNumber: 6,
      ApartmentNumber: 22,
      Mobile: 89734567654,
      ApartmentArea: 70,
      Pin: 956386,
      SerialNumber: 5867,
      PId: 976,
    },

    {
      Surname: 'Lee',
      CheckInDate: new Date('06.12.1986'),
      PersonsQuantity: 1,
      FloorNumber: 6,
      ApartmentNumber: 23,
      Mobile: 89745679876,
      ApartmentArea: 90,
      Pin: 358629,
      SerialNumber: 8575,
      PId: 563,
    },

    {
      Surname: 'Walker',
      CheckInDate: new Date('06.12.1988'),
      PersonsQuantity: 2,
      FloorNumber: 7,
      ApartmentNumber: 24,
      Mobile: 89745678754,
      ApartmentArea: 45,
      Pin: 576839,
      SerialNumber: 5967,
      PId: 865,
    },

    {
      Surname: 'Hall',
      CheckInDate: new Date('03.07.1996'),
      PersonsQuantity: 3,
      FloorNumber: 7,
      ApartmentNumber: 25,
      Mobile: 89713487654,
      ApartmentArea: 45,
      Pin: 684926,
      SerialNumber: 3645,
      PId: 456,
    },

    {
      Surname: 'Allen',
      CheckInDate: new Date('08.12.1999'),
      PersonsQuantity: 4,
      FloorNumber: 7,
      ApartmentNumber: 26,
      Mobile: 89745679876,
      ApartmentArea: 70,
      Pin: 195847,
      SerialNumber: 4876,
      PId: 867,
    },

  ]
}
