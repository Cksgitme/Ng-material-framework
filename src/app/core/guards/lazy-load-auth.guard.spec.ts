import { TestBed } from '@angular/core/testing';

import { LazyLoadAuthGuard } from './lazy-load-auth.guard';

describe('LazyLoadAuthGuard', () => {
  let guard: LazyLoadAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LazyLoadAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
