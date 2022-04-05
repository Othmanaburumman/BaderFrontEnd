import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './Module/admin/admin.module';
import { CharityModule } from './Module/charity/charity.module';
import { UserModule } from './Module/user/user.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>UserModule
  },{
    path:'admin',
    loadChildren:()=>AdminModule
  },{
    path:'charity',
    loadChildren:()=>CharityModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
