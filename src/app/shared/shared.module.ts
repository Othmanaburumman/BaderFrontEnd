import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatIconModule} from '@angular/material/icon';
import { DashBordNavComponent } from './Components/dash-bord-nav/dash-bord-nav.component';
import { DashBordSideBardComponent } from './Components/dash-bord-side-bard/dash-bord-side-bard.component';
import { HttpClientModule } from '@angular/common/http';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashBordNavComponent,
    DashBordSideBardComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashBordNavComponent,
    DashBordSideBardComponent,
    MatIconModule,
    TooltipModule,
    CarouselModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule
  ]
})
export class SharedModule { }
