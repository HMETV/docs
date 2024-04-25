import { TestBed } from '@angular/core/testing';

import { ArucoTagService } from './aruco-tag.service';

describe('ArucoTagService', () => {
  let service: ArucoTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArucoTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
