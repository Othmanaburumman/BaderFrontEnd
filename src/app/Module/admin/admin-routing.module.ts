import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatitcsComponent } from './statitcs/statitcs.component';

const routes: Routes = [{
  path:'',
  component:StatitcsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
