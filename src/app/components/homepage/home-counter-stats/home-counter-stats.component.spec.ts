import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCounterStatsComponent } from './home-counter-stats.component';

describe('HomeCounterStatsComponent', () => {
  let component: HomeCounterStatsComponent;
  let fixture: ComponentFixture<HomeCounterStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCounterStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCounterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
