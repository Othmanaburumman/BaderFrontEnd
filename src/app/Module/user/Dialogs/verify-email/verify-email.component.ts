import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  token:String|any="";
  hide = true;
  loginform: FormGroup  = new FormGroup({
    Email: new FormControl('', [Validators.required,Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  constructor() {

   }

  ngOnInit(): void {

  }

  Login(){
    var login:any={
      email:this.loginform.controls['Email'].value,
      password:this.loginform.controls['Password'].value
    }
  }

}
