import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CharityServiceService } from 'src/app/Services/charity-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public service:CharityServiceService,public toastr:ToastrService,public router:Router) {}

  token:String|any="";
  type:string="";
  descr:string="";
  user:string="";
  noUser:number=0;

  city:string="";
  street:string="";
  build:string="";

  date:Date=new Date();
  ngOnInit(): void {
    this.token=localStorage.getItem('UserToken')
    let data:any|undefined = jwtDecode(this.token); 
    if(data.RoleId==1){
      this.toastr.warning('Unothrized')
      this.router.navigate(['/login'])
    }else{
      this.service.GetDonation(data.ChartiyId)
    }
    this.searchBtn = document.querySelector(".bx-search");
    this.closeBtn= document.querySelector("#btn");
    this.sidebar = document.querySelector(".sidebar");
    this.navbar= document.querySelector("#nav");
    this.section= document.querySelector("#section");


  }
  sidebar:Element | null = null;
  closeBtn:Element | null = null;
  searchBtn:Element | null = null;
  navbar:Element|null=null;
  section:Element|null=null;
  MoveOut(){
    this.toastr.warning('Logged Out')
   this.router.navigate(['/login'])
  }

 btnclicked(){
   this.sidebar!.classList.toggle("open");
   this.menuBtnChange();
 }

 // following are the code to change sidebar button(optional)
 menuBtnChange(this: any) {
  if(this.sidebar.classList.contains("open")){
    this.section.classList.replace("container-full","container")
    this.navbar.classList.replace("nav","navManage")
    this.closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  }else {
    this.section.classList.replace("container","container-full")
    this.navbar.classList.replace("navManage","nav")
    this.closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
  }
 }

 SaveService(){
  this.token=localStorage.getItem('UserToken')
  let data:any|undefined = jwtDecode(this.token); 
  if(this.type=="" || this.descr=="" || this.user=="" || this.noUser==0){
    this.toastr.warning('Please Enter All Date')
  }else{
    const object={
      "type":this.type,
      "description":this.descr,
      "targetUser":this.user,
      "totalBeneficiaries":this.noUser,
      "StartAt":this.date,
      "charityId":data.ChartiyId
    }
    this. type="";
    this.descr="";
    this.user="";
    this.noUser=0;
    this.date=new Date();
  
    
    this.service.InsertService(object);
  }
    
 }


 SaveAddress(){
  this.token=localStorage.getItem('UserToken')
  let data:any|undefined = jwtDecode(this.token); 
  if(this.city=="" || this.street=="" || this.build==""){
    this.toastr.warning('Please Enter All Date')
  }else{
    const object={
      "city":this.city,
      "street":this.street,
      "buildingNumber":this.build,
      "charityId":data.ChartiyId
    }
    this. city="";
    this.street="";
    this.build="";

  
    
    this.service.InsertService(object);
  }
  
 
 }

}
