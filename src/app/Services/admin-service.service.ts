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
export class AdminServiceService {

  constructor(public http:HttpClient,public ngxSpinner:NgxSpinnerService,public toastr:ToastrService
    ,public router:Router) { }

    ResponseToRequest(donation: any) {
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


    GetStatics(donation: any) {
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

    GetAllSubscriber(donation: any) {
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

    GetAllMassages(donation: any) {
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
  
}
