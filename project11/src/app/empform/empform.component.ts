import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { emailMatchValidator,rangeValidator } from '../my-validator';
import { StorageService } from '../store.service';


@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
  employeeFormGroup:FormGroup;
  constructor(private build:FormBuilder,private store:StorageService) {
    this.employeeFormGroup = this.build.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:[''],
      emailGroup:this.build.group({
        email:['',[Validators.required,Validators.email]],
        confirmEmail:['',[Validators.required,Validators.email]],
      },{validators:emailMatchValidator}),
      mobile:[''],
      sendNotification: ['email'],
      range: ['',[rangeValidator(10,20)]]   
   });
   }

  ngOnInit(): void {
  }
  get firstName() {return this.employeeFormGroup.get('firstName')!;} 
  get range() {return this.employeeFormGroup.get('range')!;}
  get emailGroup() {return this.employeeFormGroup.get('emailGroup')!;}
  get mobile() {return this.employeeFormGroup.get('mobile')!;}

  loadEmployee() {
    let data = {
      firstName: 'Maneesha',
      lastName: 'Manikandan'
    }
    this.employeeFormGroup.patchValue(data);
  }
  doNotification(msgtype:any) {
    if(msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required,rangeValidator(8000000000,9999999999)]);
      mobileControl?.updateValueAndValidity();
    }
  }
  storing(formdata:NgForm)
  {
      console.log(formdata);
      this.store.pushData(formdata);

  }
}