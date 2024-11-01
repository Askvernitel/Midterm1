import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParentUser } from '../interfaces/parent-user';
import { ChildUser } from '../interfaces/child-user';
import { DisplayService } from '../services/display.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
@Input() inputArray!:Array<ParentUser>;
@Output() outputArray = new EventEmitter<Array<ChildUser>>;

constructor(private displayService:DisplayService){

}
ngOnInit(){
  this.outputArray.emit( [
    {
      Id:5,
      Firstname:"Daniel",
      Lastname:"Kolotashvili",
      DateOfBirth:new Date(),
      PhoneNumber:123123,
      Email:"Daniel@gmail.com"
    },{
      Id:5,
      Firstname:"akaki",
      Lastname:"akakishvili",
      DateOfBirth:new Date(),
      PhoneNumber:12223,
      Email:"akaki@gmail.com"
    }

  ])

}

displayArray(array:any){
  this.displayService.displayArray(array);
}

}
