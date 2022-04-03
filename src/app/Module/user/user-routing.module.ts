import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CharityProfileComponent } from './charity-profile/charity-profile.component';
import { CharityComponent } from './charity/charity.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FinishComponent } from './Dialogs/finish/finish.component';
import { VerifyEmailComponent } from './Dialogs/verify-email/verify-email.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SurveyComponent } from './Dialogs/survey/survey.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'initiatives',
  component:EventsComponent
  },{
    path:'charity',
    component:CharityComponent
  },{
    path:'charity/profile/:Id',
    component:CharityProfileComponent
  },{
    path:'about',
    component:AboutUsComponent
  },{
    path:'contact',
    component:ContactusComponent
  },{
    path:'campaigns',
    component:CampaignsComponent
  },{
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
  ,{
     path:'finish',
     component:FinishComponent
   },{
     path:'survey',
     component:SurveyComponent
   },{
     path:'verfiyEmail',
     component:VerifyEmailComponent
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
