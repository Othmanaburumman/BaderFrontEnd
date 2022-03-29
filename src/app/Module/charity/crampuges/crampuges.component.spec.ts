import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrampugesComponent } from './crampuges.component';

describe('CrampugesComponent', () => {
  let component: CrampugesComponent;
  let fixture: ComponentFixture<CrampugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrampugesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrampugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
