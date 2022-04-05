import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharityRoutingModule } from './charity-routing.module';
import { EventsComponent } from './events/events.component';
import { CrampugesComponent } from './crampuges/crampuges.component';
import { ProfileComponent } from './profile/profile.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyInfoComponent } from './survey-info/survey-info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EventsComponent,
    CrampugesComponent,
    ProfileComponent,
    SurveyComponent,
    SurveyInfoComponent
  ],
  imports: [
    CommonModule,
    CharityRoutingModule,
    SharedModule
  ]
})
export class CharityModule { }
