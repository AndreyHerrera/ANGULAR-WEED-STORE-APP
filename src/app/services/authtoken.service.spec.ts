import { TestBed } from '@angular/core/testing';

import { AuthTokenService } from './authtoken.service';

describe('AuthtokenService', () => {
  let service: AuthTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
