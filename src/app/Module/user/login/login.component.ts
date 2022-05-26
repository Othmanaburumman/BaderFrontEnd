import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email:string="";
   password:string="";
   constructor(public service: UserServiceService,public tostar:ToastrService) { }

  ngOnInit(): void {
  }

  LoginAsCharity(){
    if(this.email=="" && this.password==""){
      this.tostar.warning('Please Enter Data')
    }else{
      const login={
        email:this.email,
        password:this.password
      }
      this.service.Login(login);
    }
  
  }

}
