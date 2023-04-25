import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllAirlinedetailsComponent } from './display-all-airlinedetails.component';

describe('DisplayAllAirlinedetailsComponent', () => {
  let component: DisplayAllAirlinedetailsComponent;
  let fixture: ComponentFixture<DisplayAllAirlinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllAirlinedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllAirlinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
