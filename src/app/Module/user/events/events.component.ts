import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import {ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { VMDonation } from '../../../Models/VMDonation';
import { VMJoinEvent } from 'src/app/Models/VMJoinEvent';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',
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
export class EventsComponent implements OnInit {
  @ViewChild('EventModel', { static: false }) eventModel?: ModalDirective;
  JoinEventObject:VMJoinEvent=new VMJoinEvent();
  constructor(public service: UserServiceService,public tostar:ToastrService) { }
  
  ngOnInit(): void {
    this.service.FetchEventsFromApi()
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
