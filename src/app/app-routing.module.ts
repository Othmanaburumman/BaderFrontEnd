import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './Module/admin/admin.module';
import { UserModule } from './Module/user/user.module';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>UserModule
  },{
    path:'admin',
    loadChildren:()=>AdminModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
