import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewOverviewComponent } from './tradingview-overview.component';

describe('TradingviewOverviewComponent', () => {
  let component: TradingviewOverviewComponent;
  let fixture: ComponentFixture<TradingviewOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingviewOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
