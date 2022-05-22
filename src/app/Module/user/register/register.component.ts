import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VMCharity } from 'src/app/Models/VMCharity';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  charity:VMCharity=new VMCharity();
  constructor(public service: UserServiceService,public tostar:ToastrService) { }


  ngOnInit(): void {
  }

  Register(){
    if(this.charity.email==undefined && this.charity.name==undefined && this.charity.password==undefined
      && this.charity.phone==undefined){
        this.tostar.warning('please Enter All Required Data')
      }else{
        this.service.RegisterNewCharity(this.charity);
      }
  }

}
