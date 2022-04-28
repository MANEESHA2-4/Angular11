import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  empRecord:any[]=[{
    firstName : "",
  
  lastName : "",
  mobile : "",
  email : "",
  confirmemail:"",
  Notification:"",
  Range:""
  }
  
  ];

  newrecord:any[] = [];

  constructor() { }

  pushData(data:any = {}) {
    console.log(data);
   this.newrecord.push(data);
   console.log(this.newrecord);
    console.log(data.firstName);
    console.log("after Pushing" , this.newrecord);
    console.log("Hello working");
  }
}
