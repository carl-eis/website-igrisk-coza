import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCallToActionComponent } from './home-call-to-action.component';

describe('HomeCallToActionComponent', () => {
  let component: HomeCallToActionComponent;
  let fixture: ComponentFixture<HomeCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
