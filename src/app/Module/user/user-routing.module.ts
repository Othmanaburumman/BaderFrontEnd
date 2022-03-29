import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharityProfileComponent } from './charity-profile/charity-profile.component';
import { CharityComponent } from './charity/charity.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'events',
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
