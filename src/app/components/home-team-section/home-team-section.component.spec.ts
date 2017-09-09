import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeamSectionComponent } from './home-team-section.component';

describe('HomeTeamSectionComponent', () => {
  let component: HomeTeamSectionComponent;
  let fixture: ComponentFixture<HomeTeamSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTeamSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
