import { TestBed } from '@angular/core/testing';

import { ChessSocketService } from './chess-socket.service';

describe('ChessSocketService', () => {
  let service: ChessSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
