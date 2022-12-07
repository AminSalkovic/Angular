import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

    hotelName= 'hilton hotelss'
    numberOfRooms=20
    hideRooms=false;
    amin=false;

    rooms : Room={
      totalRooms:20,
      avaliableRooms:10,
      bookedRooms:5
    }
    
    roomList : RoomList[]=[
      { roomNumber:1,
        roomType:'Deluxe',
        amenities:'air conditier',
        price:500,
        photos:'https://unsplash.com/photos/_dS27XGgRyQ',
        checkinTime:new Date('11-nov-2022'),
        checkoutTime: new Date('12-dec-2022')
      },
      { 
        roomNumber:2,
        roomType:'Deluxe',
        amenities:'air conditier',
        price:900,
        photos:'https://unsplash.com/photos/_dS27XGgRyQ',
        checkinTime:new Date('15-nov-2022'),
        checkoutTime: new Date('17-dec-2022')
      },
      {
        roomNumber:3,
        roomType:'Deluxe room',
        amenities:'air conditier',
        price:600,
        photos:'https://unsplash.com/photos/_dS27XGgRyQ',
        checkinTime:new Date('14-nov-2022'),
        checkoutTime: new Date('15-dec-2022')
      },
    ]
    constructor(){}

    ngOnInit():void{}

    toggle(){
      this.hideRooms = !this.hideRooms
    }
    click(){
      this.amin= !this.amin
    }
}
