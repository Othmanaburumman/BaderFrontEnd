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

    InsertEvents(donation: any) {
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

    GetUserAnswers(donation: any) {
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
    GetEvents() {
      this.http.get('http://localhost:56209/api/Charity/FetchEvents').subscribe((res: any) => {
        if (res) {
          this.events=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }
    GetDonation() {
      this.http.get('http://localhost:56209/api/Charity/FetchCampagin').subscribe((res: any) => {
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
