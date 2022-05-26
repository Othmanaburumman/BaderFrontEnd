import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  joinRequests:any[]=[];
  subscriber:any=[]=[];
  massages:any[]=[];
  object:any={};
  constructor(public http:HttpClient,public ngxSpinner:NgxSpinnerService,public toastr:ToastrService
    ,public router:Router) { }

    ResponseToRequest() {
      this.http.post('http://localhost:56209/api/User/DonateToSite', null).subscribe((res: any) => {
        if (res) {
          this.toastr.success('Thank You Very Mush');
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }

    GetAllRequests() {
      this.http.post('http://localhost:56209/api/User/DonateToSite', null).subscribe((res: any) => {
        if (res) {
          this.joinRequests=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }


    GetStatics() {
      this.http.post('http://localhost:56209/api/User/DonateToSite', null).subscribe((res: any) => {
        if (res) {
          this.object=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }

    GetAllSubscriber() {
      this.http.get('http://localhost:56209/api/Admin/GetAllWebSiteSubscriberInformation').subscribe((res: any) => {
        if (res) {
          this.subscriber=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }

    GetAllMassages() {
      this.http.get('http://localhost:56209/api/Admin/GetAllUserMessages').subscribe((res: any) => {
        if (res) {
          this.massages=res;
        } else {
          this.toastr.error('Something Went Wrong')
        }
  
      }, (error) => {
        this.toastr.error('Cannot Complete Operation')
      })
    }
  
}
