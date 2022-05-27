import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { VMDonation } from '../Models/VMDonation';
import { VMMassage } from '../Models/VMMassage';
import { Router } from '@angular/router';
import { VMCharity } from '../Models/VMCharity';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  events:any[]=[];
  donations:any=[];
  information:any={};
  charites:any[]=[];
  charity:any={};
  token:String|any="";

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
  GetSummation(id:number){
    return this.http.get('http://localhost:56209/api/User/GetDonationSummaationForCampungies?CampaingeId='+id)
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
  Donatation(donation: any) {
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
    this.http.post('http://localhost:56209/api/Authoraztion/LoginCredinital', login,{ responseType: 'text' }).subscribe((res: any) => {
      if (res) {
        this.toastr.success('Login Success');
        localStorage.setItem("UserToken",res);
        this.token=localStorage.getItem('UserToken')
        let data:any|undefined = jwtDecode(this.token); 
        if(data.RoleId==1){
          this.router.navigate(['/admin/'])
        }else{
          this.router.navigate(['/charityAdmin/']);
        }
       
      } else {
        this.toastr.error('Login Failed')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }
  RegisterNewCharity(charity:VMCharity){
    this.http.post('http://localhost:56209/api/Authoraztion/RegisterNewCharity', charity).subscribe((res: any) => {
      if (res) {
        this.charites=res;
        this.toastr.success('Send Request Done Successfly Wait For Confirm Email');
        this.router.navigate(['/login']);
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }

  GetCharites(){
    this.http.get('http://localhost:56209/api/User/GetAllCharity').subscribe((res: any) => {
      if (res) {
        this.charites=res;
        this.toastr.success('Success');
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }
  SearchCharityByName(text:string){
    this.http.get('http://localhost:56209/api/User/GetCharityByName?name='+text+"").subscribe((res: any) => {
      if (res) {
        this.charites=res;
        this.toastr.success('Success');
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }
  GetCharityById(id:number){
    this.http.get('http://localhost:56209/api/User/GetCharityById?id='+id+"").subscribe((res: any) => {
      if (res) {
        this.charity=res;
        this.toastr.success('Success');
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }

  JoinEvent(object:any){
    this.http.post('http://localhost:56209/api/User/InsertUserAnswerForSurvey', object).subscribe((res: any) => {
      if (res) {  
        this.toastr.success('Send Request Done Successfly Wait For Confirm Email');
      } else {
        this.toastr.error('Something Went Wrong')
      }

    }, (error) => {
      this.toastr.error('Cannot Complete Operation')
    })
  }
}
