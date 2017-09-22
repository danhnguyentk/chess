import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayChessComponent } from './play-chess.component';

describe('PlayChessComponent', () => {
  let component: PlayChessComponent;
  let fixture: ComponentFixture<PlayChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
