import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import {ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { VMDonation } from '../../../Models/VMDonation';
import { VMJoinEvent } from 'src/app/Models/VMJoinEvent';

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
  @ViewChild('EventModel', { static: false }) eventModel?: ModalDirective;
  email: string = "";
  verificationCode: string = "";
  name: string = "";
  DonationObject: VMDonation = new VMDonation();
  JoinEventObject:VMJoinEvent=new VMJoinEvent();
  constructor(public service: UserServiceService,public tostar:ToastrService) { }

 
  
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

  GetSum(camId:number){
    this.service.GetSummation(camId).subscribe((res:any) => {
      return parseInt(res);
    }, (error) => {
      return 0;
      console.log(error)
    })
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
      this.subscriberModel?.hide()
      this.service.SubscribeSite(info);
     
    }
  }
 
  hideChildModal(): void {
    this.DonationObject=new VMDonation();
   this.childModal?.hide();
  }

  DonateForCamp(id:number){
    this.DonationObject.donationID=id;
    this.childModal?.show();
  }

  Donate() {
    if (this.DonationObject.cardNumber == undefined || this.DonationObject.cvv2 == undefined || this.DonationObject.expireDate == undefined
      || this.DonationObject.amount == undefined) {
      this.tostar.warning('Please Insert All Required data')
    } else {
     
      const i={
        "name":this.DonationObject.name,
        "Amount":this.DonationObject.amount,
        "DonationCampaignsId":this.DonationObject.donationID,
        "Email":this.DonationObject.email,
        "CardNumber":this.DonationObject.cardNumber,
        "ExpireDate": this.DonationObject.expireDate,
        "Cvv2":this.DonationObject.cvv2
    }
      this.service.Donatation(i);
    }
  }
  JoinEvent(id:number){
    this.JoinEventObject.initiativesId=id+"";
    this.eventModel?.show();
  }
  closeEventModel(){
    this.JoinEventObject=new VMJoinEvent();
    this.eventModel?.hide();
  }

  JoinSpecificEvent(){
    if(this.JoinEventObject.name==undefined || this.JoinEventObject.email==undefined ||
      this.JoinEventObject.age==undefined || this.JoinEventObject.phoneNumber==undefined){
        this.tostar.warning('Please Fill All Required Date')
      }else{
        this.JoinEventObject.date=new Date().getDate()+"";
        const o={
          "name": this.JoinEventObject.name,
          "email":this.JoinEventObject.email,
          "phoneNumber":this.JoinEventObject.phoneNumber,
          "age":this.JoinEventObject.age,
          "initiativesId":this.JoinEventObject.initiativesId,
      }
        this.eventModel?.hide();
        this.service.JoinEvent(o);
      }
  }

}
