import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css',
  '../../../../assets/assets/css/bootstrap.min.css',
	'../../../../assets/assets/css/slicknav.css',
    '../../../../assets/assets/css/flaticon.css',
    '../../../../assets/assets/css/progressbar_barfiller.css',
    '../../../../assets/assets/css/gijgo.css',
    '../../../../assets/assets/css/animate.min.css',
    '../../../../assets/assets/css/animated-headline.css',
	'../../../../assets/assets/css/magnific-popup.css',
	'../../../../assets/assets/css/fontawesome-all.min.css',
	'../../../../assets/assets/css/slick.css',
	'../../../../assets/assets/css/nice-select.css',
	'../../../../assets/assets/css/style.css',]
})
export class CharityComponent implements OnInit {
  charityName:string="";
  constructor(public service: UserServiceService,public tostar:ToastrService) { }

  ngOnInit(): void {
    this.GetAllCharity();
  }
  GetAllCharity(){
    this.service.GetCharites();
  }

  SearchCharityByName(){
    if(this.charityName==""){
      this.tostar.warning('Enter Valid Name')
    }else{
      this.service.SearchCharityByName(this.charityName);
    }
   
  }
  OpenCharityProfile(charitId:number){

  }

}
