import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { IndicatorLoaderComponent } from './indicator-loader.component';

describe('IndicatorLoaderComponent', () => {
  let component: IndicatorLoaderComponent;
  let fixture: ComponentFixture<IndicatorLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
