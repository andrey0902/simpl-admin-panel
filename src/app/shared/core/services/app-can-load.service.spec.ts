import { TestBed } from '@angular/core/testing';

import { AppCanLoadService } from './app-can-load.service';

describe('AppCanLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCanLoadService = TestBed.get(AppCanLoadService);
    expect(service).toBeTruthy();
  });
});
