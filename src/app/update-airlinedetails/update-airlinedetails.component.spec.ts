import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAirlinedetailsComponent } from './update-airlinedetails.component';

describe('UpdateAirlinedetailsComponent', () => {
  let component: UpdateAirlinedetailsComponent;
  let fixture: ComponentFixture<UpdateAirlinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAirlinedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAirlinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
