import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMassagesComponent } from './user-massages.component';

describe('UserMassagesComponent', () => {
  let component: UserMassagesComponent;
  let fixture: ComponentFixture<UserMassagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMassagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMassagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
