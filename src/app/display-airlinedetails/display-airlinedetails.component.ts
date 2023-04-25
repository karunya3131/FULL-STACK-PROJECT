import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-airlinedetails',
  templateUrl: './display-airlinedetails.component.html',
  styleUrls: ['./display-airlinedetails.component.css']
})
export class DisplayAirlinedetailsComponent implements OnInit{
  airlineId: number = 0; 
  airline: any = [];
 
//In this page when we click edit button it will come into this page we it shows the details of the airline with the help of id
  constructor
  (private route: ActivatedRoute, private airlineService: AirlineService,private router: Router) {
    
  }
    ngOnInit(): void {
    this.airlineId = this.route.snapshot.params['airlineId'];
    this.airline = new Airline();
    this.airlineService.displayAirlineDetailsById(this.airlineId).subscribe( data => {
    this.airline = data;
    
    
  });

  }
}
