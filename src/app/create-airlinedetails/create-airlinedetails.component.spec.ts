import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirlinedetailsComponent } from './create-airlinedetails.component';

describe('CreateAirlinedetailsComponent', () => {
  let component: CreateAirlinedetailsComponent;
  let fixture: ComponentFixture<CreateAirlinedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAirlinedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAirlinedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
