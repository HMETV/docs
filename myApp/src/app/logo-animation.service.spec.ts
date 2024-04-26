import { TestBed } from '@angular/core/testing';

import { LogoAnimationService } from './logo-animation.service';

describe('LogoAnimationService', () => {
  let service: LogoAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
