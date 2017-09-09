import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceBoxComponent } from './home-service-box.component';

describe('HomeServiceBoxComponent', () => {
  let component: HomeServiceBoxComponent;
  let fixture: ComponentFixture<HomeServiceBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiceBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
