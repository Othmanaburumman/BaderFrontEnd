import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityInformationsComponent } from './charity-informations.component';

describe('CharityInformationsComponent', () => {
  let component: CharityInformationsComponent;
  let fixture: ComponentFixture<CharityInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharityInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
