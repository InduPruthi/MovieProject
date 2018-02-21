import { TestBed, inject } from '@angular/core/testing';

import { MovieServicesService } from './movie-services.service';

describe('MovieServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieServicesService]
    });
  });

  it('should be created', inject([MovieServicesService], (service: MovieServicesService) => {
    expect(service).toBeTruthy();
  }));
});
