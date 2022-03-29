import { TestBed } from '@angular/core/testing';

import { LoginGardusGuard } from './login-gardus.guard';

describe('LoginGardusGuard', () => {
  let guard: LoginGardusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGardusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
