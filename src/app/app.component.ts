import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { ParentUser } from './interfaces/parent-user';
import { ChildUser } from './interfaces/child-user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Daniel';
  userComponentArray:Array<ChildUser> = [];
  userForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }

  users= [ 
    {
      firstName:"Vigac",
      lastName:"Ragac",
      age:50
    },
    {
      firstName:"Rigac",
      lastName:"Ragac",
      age:30
    },
    {
      firstName:"Daniel",
      lastName:"Kolotashvili",
      age:11
    },
    {
      firstName:"Magari",
      lastName:"Adamiani",
      age:20
    },
    {
      firstName:"Ilia",
      lastName:"Iliashvili",
      age:12
    }
  ]

  parentUsers:Array<ParentUser> = [
    {
      Id:5,
      Firstname:"Daniel",
      Lastname:"Kolotashvili",
      DateOfBirth:new Date(),
      PhoneNumber:123123,
      Email:"Daniel@gmail.com"
    },{
      Id:5,
      Firstname:"Ilia",
      Lastname:"Iliashvili",
      DateOfBirth:new Date(),
      PhoneNumber:123,
      Email:"Ilia@gmail.com"
    }

  ]
  formUsers:Array<any>=[];

  handleUserEvent(e:any){
    console.log(e);
    this.userComponentArray = e;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group(
      {
        Id:['', [Validators.required]],
        Firstname:['', [Validators.required, Validators.minLength(3)]],
        Lastname:['', [Validators.required, Validators.minLength(3)]],
        DateOfBirth:[null, [Validators.required]],
        PhoneNumber:[null, [Validators.required, Validators.minLength(9)]],
        Email:['', [Validators.required, Validators.email, Validators.minLength(8)]]

      }
    )
  }
  onSubmit(){
    this.formUsers.push(this.userForm.value);
  }
}
