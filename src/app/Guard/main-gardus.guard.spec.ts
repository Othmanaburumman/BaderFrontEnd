import { TestBed } from '@angular/core/testing';

import { MainGardusGuard } from './main-gardus.guard';

describe('MainGardusGuard', () => {
  let guard: MainGardusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MainGardusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
