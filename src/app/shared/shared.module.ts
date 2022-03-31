import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashBordNavComponent } from './Components/dash-bord-nav/dash-bord-nav.component';
import { DashBordSideBardComponent } from './Components/dash-bord-side-bard/dash-bord-side-bard.component';
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
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    DashBordNavComponent,
    DashBordSideBardComponent,

    TooltipModule,
    CarouselModule
  ]
})
export class SharedModule { }
