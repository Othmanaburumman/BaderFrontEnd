import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatIconModule} from '@angular/material/icon';
import { DashBordSideBardComponent } from './Components/dash-bord-side-bard/dash-bord-side-bard.component';
import { HttpClientModule } from '@angular/common/http';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NgChartsModule } from 'ng2-charts';
//import { ModalModule } from "ngx-bootstrap";
import { ModalModule } from 'ngx-bootstrap/modal';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import 'boxicons';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashBordSideBardComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgChartsModule,
    ModalModule.forRoot()
    
   // ModalModule.forRoot()
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashBordSideBardComponent,
    MatIconModule,
    TooltipModule,
    CarouselModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgChartsModule,
    ModalModule
  ]
})
export class SharedModule { }
