import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    TooltipModule,
    CarouselModule
  ]
})
export class SharedModule { }
