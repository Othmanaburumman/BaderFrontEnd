import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import {ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { VMDonation } from '../../../Models/VMDonation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
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

export class HomeComponent implements OnInit {
  @ViewChild('lgModal', { static: false }) childModal?: ModalDirective;
  @ViewChild('subscribeModel', { static: false }) subscriberModel?: ModalDirective;

  constructor(public service: UserServiceService,public tostar:ToastrService) { }
  email: string = "";
  verificationCode: string = "";
  name: string = "";
  DonationObject: VMDonation = new VMDonation();
 
  
  ngOnInit(): void {
    this.FetchDonations();
    this.FetchEvents();
    this.FetchInfo();
  }

  FetchEvents(){
    this.service.FetchEventsFromApi()
  }
  FetchDonations(){
    this.service.FetchDonationsFromApi()
  }
  FetchInfo(){
    this.service.FetchInfoFromApi();
  }

  DonateForWebSite(){
    this.childModal?.show();
  }
  
  SubscribeTheSite() {
    if (this.email == "" || this.verificationCode == "" || this.name=="") {
      this.tostar.warning("Please Enter The Email And Verification Code")
    } else {
      const info = {
        Name: this.name,
        Email: this.email,
        Code: this.verificationCode
      };
      this.service.SubscribeSite(info);
      this.subscriberModel?.hide()
    }
  }
 
  hideChildModal(): void {
   this.childModal?.hide();
  }

  Donate() {
    if (this.DonationObject.cardNumber == undefined && this.DonationObject.cvv2 == undefined && this.DonationObject.expireDate == undefined
      && this.DonationObject.amount == undefined) {
      this.tostar.warning('Please Insert All Required data')
    } else {
      this.service.Donatation(this.DonationObject);
    }
  }


}
