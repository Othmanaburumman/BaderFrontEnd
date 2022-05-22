import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { VMDonation } from '../../../Models/VMDonation';
import {ViewChild} from '@angular/core';
@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css',
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
export class CampaignsComponent implements OnInit {
  @ViewChild('lgModal', { static: false }) childModal?: ModalDirective;
  constructor(public service: UserServiceService,public tostar:ToastrService) { }
  DonationObject: VMDonation = new VMDonation();
  ngOnInit(): void {
    this.service.FetchDonationsFromApi()
  }

  DonateForCamp(id:number){
    this.DonationObject.donationID=id;
    this.childModal?.show();
  }
  DonateForWebSite(){
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
  hideChildModal(): void {
    this.DonationObject=new VMDonation();
   this.childModal?.hide();
  }

}
