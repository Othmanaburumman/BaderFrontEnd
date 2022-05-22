import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-charity-profile',
  templateUrl: './charity-profile.component.html',
  styleUrls: ['./charity-profile.component.css',
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
export class CharityProfileComponent implements OnInit {

  constructor(public service: UserServiceService,public tostar:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('Id');
    if(id!=null){
      this.service.GetCharityById(parseInt(id));
    }
  }

}
