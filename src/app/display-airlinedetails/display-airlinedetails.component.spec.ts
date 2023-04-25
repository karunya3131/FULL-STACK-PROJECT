import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAirlinedetailsComponent } from './display-airlinedetails.component';

describe('DisplayAirlinedetailsComponent', () => {
  let component: DisplayAirlinedetailsComponent;
  let fixture: ComponentFixture<DisplayAirlinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAirlinedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAirlinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
