import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor(public service: UserServiceService,public tostar:ToastrService) { }

  ngOnInit(): void {
    this.service.FetchDonationsFromApi();
  }

}
