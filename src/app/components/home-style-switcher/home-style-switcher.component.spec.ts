import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStyleSwitcherComponent } from './home-style-switcher.component';

describe('HomeStyleSwitcherComponent', () => {
  let component: HomeStyleSwitcherComponent;
  let fixture: ComponentFixture<HomeStyleSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStyleSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStyleSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
