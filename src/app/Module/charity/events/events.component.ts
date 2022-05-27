import { Component, OnInit } from '@angular/core';
import { CharityServiceService } from 'src/app/Services/charity-service.service';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {ViewChild} from '@angular/core';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  token:String|any="";
  title:string="";
  description:string="";
  start:Date=new Date();
  end:Date=new Date();
  duration:number=0;
  seats:number=0;
  @ViewChild('addEventModel', { static: false }) addEventModel?: ModalDirective;
  constructor(public service:CharityServiceService,public toastr:ToastrService,public router:Router
    ,public route:ActivatedRoute) {}

  ngOnInit(): void {
    this.token=localStorage.getItem('UserToken')
    let data:any|undefined = jwtDecode(this.token); 
    if(data.RoleId==1){
      this.toastr.warning('Unothrized')
      this.router.navigate(['/login'])
    }else{
      this.service.GetEvents(data.ChartiyId)
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


 GetAnswers(id:number){
  this.router.navigate(['charityAdmin/surveysDetails/'+id])
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
    this.addEventModel?.show();
 }
 HideDialog(){
  this.addEventModel?.hide();
 }

 InsertNewEvent(){


  if(this.title=="" || this.description == "" || this.duration ==0 || this.seats == 0){
    this.toastr.warning('Please Enter The Required Data')
  }else{
    this.addEventModel?.hide();
    const obj={
      "title":this.title,
      "description":this.description,
      "startAt":this.start,
      "endAt":this.end,
      "duration":this.duration,
      "seats":this.seats
    }
    this.service.InsertEvents(obj);
  }

 }

}
