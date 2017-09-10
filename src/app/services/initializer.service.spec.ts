import { TestBed, inject } from '@angular/core/testing';

import { InitializerService } from './initializer.service';

describe('InitializerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitializerService]
    });
  });

  it('should be created', inject([InitializerService], (service: InitializerService) => {
    expect(service).toBeTruthy();
  }));
});
