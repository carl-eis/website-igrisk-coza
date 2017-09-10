import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMultiWidgetComponent } from './services-multi-widget.component';

describe('ServicesMultiWidgetComponent', () => {
  let component: ServicesMultiWidgetComponent;
  let fixture: ComponentFixture<ServicesMultiWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesMultiWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesMultiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
