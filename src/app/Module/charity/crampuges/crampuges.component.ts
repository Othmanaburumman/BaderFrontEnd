import { Component, OnInit } from '@angular/core';
import { CharityServiceService } from 'src/app/Services/charity-service.service';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {ViewChild} from '@angular/core';
@Component({
  selector: 'app-crampuges',
  templateUrl: './crampuges.component.html',
  styleUrls: ['./crampuges.component.css']
})
export class CrampugesComponent implements OnInit {
  token:String|any="";
  description:string="";
  start:Date=new Date();
  end:Date=new Date();
  targetAmount:number=0;
  @ViewChild('addDonationsModel', { static: false }) addDonationsModel?: ModalDirective;
  constructor(public service:CharityServiceService,public toastr:ToastrService,public router:Router) {}

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

 OpenDialog(){
  this.addDonationsModel?.show();
}
HideDialog(){
this.addDonationsModel?.hide();
}

InsertNewDonations(){
  if(this.targetAmount==0 || this.description == ""){
    this.toastr.warning('Please Enter The Required Data')
  }else{
    this.addDonationsModel?.hide();
    const obj={
     
      "description":this.description,
      "startAt":this.start,
      "endAt":this.end,
      "targetAmount":this.targetAmount
    }
    this.service.InsertDonatation(obj);
  }
}
}
