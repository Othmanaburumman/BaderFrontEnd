import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { JoinRequestComponent } from './join-request/join-request.component';
import { CharityInformationsComponent } from './charity-informations/charity-informations.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { StatitcsComponent } from './statitcs/statitcs.component';
import { UserMassagesComponent } from './user-massages/user-massages.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    JoinRequestComponent,
    CharityInformationsComponent,
    SubscriberComponent,
    StatitcsComponent,
    UserMassagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
