import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }
  private logInfo(){
    console.log("Array is displayed by Display service")
  }
  displayArray(array:any){
      this.logInfo();
      array.forEach(console.log);
  }
}
