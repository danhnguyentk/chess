import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChessComponent } from './create-chess.component';

describe('CreateChessComponent', () => {
  let component: CreateChessComponent;
  let fixture: ComponentFixture<CreateChessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
