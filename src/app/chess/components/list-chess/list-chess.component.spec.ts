import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChessComponent } from './list-chess.component';

describe('ListChessComponent', () => {
  let component: ListChessComponent;
  let fixture: ComponentFixture<ListChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
