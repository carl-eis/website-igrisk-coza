import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutImageBlockComponent } from './about-image-block.component';

describe('AboutImageBlockComponent', () => {
  let component: AboutImageBlockComponent;
  let fixture: ComponentFixture<AboutImageBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutImageBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
