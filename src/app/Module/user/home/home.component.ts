import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import {ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';

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
  
  showChildModal(): void {
   
  }
 
  hideChildModal(): void {
   this.childModal?.hide();
  }

}
