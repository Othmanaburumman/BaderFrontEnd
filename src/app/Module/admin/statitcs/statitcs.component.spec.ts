import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatitcsComponent } from './statitcs.component';

describe('StatitcsComponent', () => {
  let component: StatitcsComponent;
  let fixture: ComponentFixture<StatitcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatitcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatitcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
