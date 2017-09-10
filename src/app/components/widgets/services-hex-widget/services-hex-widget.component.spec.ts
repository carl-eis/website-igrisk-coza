import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHexWidgetComponent } from './services-hex-widget.component';

describe('ServicesHexWidgetComponent', () => {
  let component: ServicesHexWidgetComponent;
  let fixture: ComponentFixture<ServicesHexWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesHexWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesHexWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
