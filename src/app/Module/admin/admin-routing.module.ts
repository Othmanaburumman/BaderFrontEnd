import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityInformationsComponent } from './charity-informations/charity-informations.component';
import { JoinRequestComponent } from './join-request/join-request.component';
import { StatitcsComponent } from './statitcs/statitcs.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { UserMassagesComponent } from './user-massages/user-massages.component';

const routes: Routes = [{
  path:'',
  component:StatitcsComponent
},{
  path:'charities',
  component:CharityInformationsComponent
},{
  path:'joinrequest',
  component:JoinRequestComponent
 },{
   path:'subcriber',
   component:SubscriberComponent
 },{
   path:'userMasseges',
   component:UserMassagesComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
