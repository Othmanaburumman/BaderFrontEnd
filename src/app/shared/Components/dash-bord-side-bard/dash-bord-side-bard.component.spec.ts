import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBordSideBardComponent } from './dash-bord-side-bard.component';

describe('DashBordSideBardComponent', () => {
  let component: DashBordSideBardComponent;
  let fixture: ComponentFixture<DashBordSideBardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBordSideBardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBordSideBardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
