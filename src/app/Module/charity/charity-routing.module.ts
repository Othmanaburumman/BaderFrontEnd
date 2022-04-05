import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrampugesComponent } from './crampuges/crampuges.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { SurveyInfoComponent } from './survey-info/survey-info.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [{
  path:'charityprofile',
  component:ProfileComponent
 },{
   path:'event',
   component:EventsComponent
 },{
   path:'campungies',
   component:CrampugesComponent
 },{
   path:'surveys',
   component:SurveyComponent
 },{
   path:'servey/:Id',
   component:SurveyInfoComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharityRoutingModule { }
