import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordNavComponent } from './dash-bord-nav.component';

describe('DashBordNavComponent', () => {
  let component: DashBordNavComponent;
  let fixture: ComponentFixture<DashBordNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBordNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBordNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
