import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

    hotelName= 'hilton hotelss'
    numberOfRooms=102
    hideRooms=false
    amin=false

    constructor(){}

    ngOnInit():void{}

    toggle(){
      this.hideRooms = !this.hideRooms
    }
    click(){
      this.amin= !this.amin
    }
}
