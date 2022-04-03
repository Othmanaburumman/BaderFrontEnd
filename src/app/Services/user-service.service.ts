import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  events:any[]=[];
  donations:any=[];
  information:any={};

  constructor(public http:HttpClient,public ngxSpinner:NgxSpinnerService,public toastr:ToastrService) { }

  FetchEventsFromApi(){
    this.ngxSpinner.show()
    return this.http.post('http://localhost:56209/api/User/FetchInitiative',{}) .subscribe((res:any)=>{
      this.events=res;
      this.ngxSpinner.hide()
    },(error)=>{
      this.ngxSpinner.hide()
      this.toastr.error('Cannot Fetch Data')
    })
  }
  FetchDonationsFromApi(){
    this.ngxSpinner.show()
    return this.http.post('http://localhost:56209/api/User/FetchDonationCampagin',{}).subscribe((res:any)=>{
      this.donations=res;

      this.ngxSpinner.hide()

    },(error)=>{
      this.ngxSpinner.hide()
      this.toastr.error('Cannot Fecth Data')
      console.log(error)
    })
  }
  FetchInfoFromApi(){
    this.http.get('http://localhost:56209/api/User/GetAllNumericInfo').subscribe((res:any)=>{
      this.information=res
      this.toastr.success('Finish')
    },(error)=>{
      this.toastr.error('Cannot Fecth Data')
    })
  }
}
