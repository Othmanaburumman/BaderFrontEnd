import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VMMassage } from 'src/app/Models/VMMassage';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css',
  '../../../../assets/assets/css/bootstrap.min.css',
	'../../../../assets/assets/css/slicknav.css',
    '../../../../assets/assets/css/flaticon.css',
    '../../../../assets/assets/css/progressbar_barfiller.css',
    '../../../../assets/assets/css/gijgo.css',
    '../../../../assets/assets/css/animate.min.css',
    '../../../../assets/assets/css/animated-headline.css',
	'../../../../assets/assets/css/magnific-popup.css',
	'../../../../assets/assets/css/fontawesome-all.min.css',
	'../../../../assets/assets/css/slick.css',
	'../../../../assets/assets/css/nice-select.css',
	'../../../../assets/assets/css/style.css',]
})
export class ContactusComponent implements OnInit {
  UserMassage:VMMassage=new VMMassage();
  constructor(public service: UserServiceService,public tostar:ToastrService) { }

  ngOnInit(): void {
  }

  SendMassage(){
    if(this.UserMassage.senderMail==undefined || this.UserMassage.subject==undefined || this.UserMassage.text==undefined){
      this.tostar.warning('Please Enter All Require Data')
    }else{
      this.service.SendMassage(this.UserMassage);
    }
  }

}
