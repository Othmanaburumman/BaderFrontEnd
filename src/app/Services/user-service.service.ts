import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { VMDonation } from '../Models/VMDonation';
import { VMMassage } from '../Models/VMMassage';
import { Router } from '@angular/router';
import { VMCharity } from '../Models/VMCharity';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  events:any[]=[];
  donations:any=[];
  information:any={};

  constructor(public http:HttpClient,public ngxSpinner:NgxSpinnerService,public toastr:ToastrService
    ,public router:Router) { }

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
  
  SubscribeSite(info: any) {
    this.http.post('http://localhost:56209/api/User/SubscribeTheSite',info).subscribe((res: any) => {
      if (res) {
        this.toastr.success('Now You are Subsriber');
      } else {
        this.toastr.error('Something Went Wrong')
      }
     
    }, (error) => {
      this.toastr.error('Cannot Fecth Data')
    })
  }
  Donatation(donation: VMDonation) {
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
  SendMassage(mass:VMMassage){
    this.http.post('http://localhost:56209/api/User/InsertMassage', mass).subscribe((res: any) => {
      if (res) {
        this.toastr.success('Thank You Very Much');
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }
  Login(login:any){
    this.http.post('http://localhost:56209/api/Authoraztion/LoginCredinital', login).subscribe((res: any) => {
      if (res) {
        this.toastr.success('Login Success');
        localStorage.setItem("UserToken",res);
        this.router.navigate(['/charityAdmin/']);
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }
  Register(charity:VMCharity){
    
  }
}
