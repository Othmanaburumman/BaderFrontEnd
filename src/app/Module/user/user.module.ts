import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { RegisterComponent } from './register/register.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { LoginComponent } from './login/login.component';
import { CharityComponent } from './charity/charity.component';
import { CharityProfileComponent } from './charity-profile/charity-profile.component';
import { DonationsComponent } from './donations/donations.component';
import { SurveyComponent } from './survey/survey.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    CampaignsComponent,
    RegisterComponent,
    ResetPassComponent,
    LoginComponent,
    CharityComponent,
    CharityProfileComponent,
    DonationsComponent,
    SurveyComponent,
    ContactusComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }