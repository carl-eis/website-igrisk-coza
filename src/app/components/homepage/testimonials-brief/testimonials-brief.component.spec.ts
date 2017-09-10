import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsBriefComponent } from './testimonials-brief.component';

describe('TestimonialsBriefComponent', () => {
  let component: TestimonialsBriefComponent;
  let fixture: ComponentFixture<TestimonialsBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
