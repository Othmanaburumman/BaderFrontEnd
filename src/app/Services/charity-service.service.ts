import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { VMDonation } from '../Models/VMDonation';
import { VMMassage } from '../Models/VMMassage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CharityServiceService {

  events:any[]=[];
  donation:any[]=[];
  answers:any[]=[];
  constructor(public http:HttpClient,public ngxSpinner:NgxSpinnerService,public toastr:ToastrService
    ,public router:Router) { }


    InsertService(donation: any) {
      this.http.post('http://localhost:56209/api/User/DonateToSite', donation).subscribe((res: any) => {
        if (res) {
          this.toastr.success('Thank You Very Mush');
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }
    InsertAddress(donation: any) {
      this.http.post('http://localhost:56209/api/User/DonateToSite', donation).subscribe((res: any) => {
        if (res) {
          this.toastr.success('Thank You Very Mush');
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }

    InsertDonatation(donation: any) {
      this.http.post('http://localhost:56209/api/User/DonateToSite', donation).subscribe((res: any) => {
        if (res) {
          this.toastr.success('Thank You Very Mush');
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }

    InsertEvents(object: any) {
      this.http.post('http://localhost:56209/api/Charity/InsertNewInitiative', object).subscribe((res: any) => {
        if (res) {
          this.toastr.success('Done');
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }

    GetUserAnswers(eventId: any) {
      this.http.get('http://localhost:56209/api/Charity/GetUserSuerviesAnswer?eventId='+eventId).subscribe((res: any) => {
        if (res) {
         this.answers=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }
    GetEvents(id:number) {
      this.http.get('http://localhost:56209/api/Charity/FetchEvents?charityId='+id+"").subscribe((res: any) => {
        if (res) {
          this.events=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }
    GetDonation(id:number){
      this.http.get('http://localhost:56209/api/Charity/FetchCampagin?charityId='+id+"").subscribe((res: any) => {
        if (res) {
          this.donation=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }
}
