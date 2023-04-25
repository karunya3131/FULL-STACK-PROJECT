import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-airlinedetails',
  templateUrl: './create-airlinedetails.component.html',
  styleUrls: ['./create-airlinedetails.component.css']
})
export class CreateAirlinedetailsComponent implements OnInit{
  
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private router: Router) { }

  ngOnInit() {
  }

  //Here it will save the details in DB and go to gotoairlinelist function
   createAirline() {
    this.airlineService.createAirlineDetails(this.airline).subscribe(data => {
      console.log(data);
      this.goToAirlineList();
    },
      error => console.log(error));
  }
 
  //Here finally it will navigate to display all page
  goToAirlineList() {
    this.router.navigate(['display-all-airlinedetails']);
  }

  //When we click the submit button it will check whether we given all the details and then it will go to createairline function
  onSubmit() {
    if((this.airline.airlineName === '')||(this.airline.origin === '')||(this.airline.destination === '')||(this.airline.seatingCapacity < 1)||(this.airline.cost <100)){
var status = confirm("Please fill the required fields");
    }
    else{
      var status = confirm("Do you want to save the details?");
      if (status == true){
  console.log(this.airline);
    this.createAirline();
}
    }
  }

}