import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})

//When we click book a ticket button it will come to this page and perform the below functions
export class TicketBookingComponent implements OnInit{
  airlineId: number = 0;
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

 
  ngOnInit(): void {
    
    this.airlineId = this.route.snapshot.params['airlineId'];
    // console.log(this.airlineId);
    this.airlineService.displayAirlineDetailsById(this.airlineId).subscribe( data =>{
      this.airline = data;
    }
    , error => console.log(error));
  }
  
  onSubmit(){
    var status = confirm("Thank you for Booking!");
    if (status == true){
     this.airlineService.bookAirlineDetails(this.airlineId,this.airline).subscribe( data =>{
         this.router.navigate(['display-all-airlinedetails']);
        }
        , error => console.log(error));
   }else{
this.router.navigate(['ticket-booking/:airlineId']);
   }}
myFunction(){
  this.airline.seatingCapacity -= this.airline.numberOfSeats;
  this.airline.calculatedCost = this.airline.numberOfSeats * ( this.airline.cost);

}
  }
