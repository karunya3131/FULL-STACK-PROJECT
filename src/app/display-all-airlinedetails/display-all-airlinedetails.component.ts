import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-all-airlinedetails',
  templateUrl: './display-all-airlinedetails.component.html',
  styleUrls: ['./display-all-airlinedetails.component.css']
})
export class DisplayAllAirlinedetailsComponent implements OnInit{
  airline: Airline[] = [];
  airlineName:string='';

  constructor(private airlineService: AirlineService,
    private router: Router) { }
  
    //When we click search button it will come here and do the respective functions
    searchByName(){
      this.airlineService.findByName(this.airlineName).subscribe(
        data =>{
          this.airline=data;
          console.log(data);
        },
        error =>{
          console.log(error);
        }
      )
    }


  ngOnInit(): void {
    this.showAllAirlineDetails();
  }
  
  //It will display all the sirline list in the DB
  private showAllAirlineDetails(){
    this.airlineService.displayAllAirlineDetails().subscribe(data => {
      this.airline = data;  
    });
  }

  //Using this function it will show us the international flights
  fetchInternationalFlight(){
      this.airlineService.findByInternationalFlight().subscribe(
        data => {
          this.airline = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

     //Using this function it will show us the Domestic flights
    fetchDomesticFlight(){
      this.airlineService.findByDomesticFlight().subscribe(
        data => {
          this.airline = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  //Using this function it will make the details get remove from the DB when we click remove all button
  confirmDeleteAll(){
    var status = confirm("Alert : Are you sure you want to delete all records?If you click ok then it will remove all records in the DB.");
    if(status == true){
      this.removeAllAirlineDetails();
    }else{
      this.showAllAirlineDetails();

    }
  }

  //This function is for deleting an individual record
  confirmDelete(airline: Airline){
    var status = confirm("Do you really want to delete this record?");
    if(status == true){
      this.deleteAirlineDetails(airline.airlineId);
    }else{
      this.showAllAirlineDetails();

    }
  }

  //To display the details by id when we click view button
  displayAirlineDetailsById(airlineId: number){
    this.router.navigate(['display-airlinedetails', airlineId]);
  }
  
  //To update the airline details while clicking edit button
  updateAirlineDetails(airlineId: number){
    this.router.navigate(['update-airlinedetails', airlineId]);
  }
  

  deleteAirlineDetails(airlineId: number){
    this.airlineService.deleteAirlineDetails(airlineId).subscribe( data => {
      console.log(data);
      this.showAllAirlineDetails();
    })
  }

  //For booking the tickets it will perform this functions
  ticketBookingDetails(airlineDetail : Airline){
    console.log(airlineDetail);
    this.router.navigate(['ticket-booking',airlineDetail.airlineId]) ;
  
}

removeAllAirlineDetails():void{
  this.airlineService.deleteAll().subscribe(
    data => {
      console.log(data);
    this.showAllAirlineDetails();
    },
    error => {
    console.log(error);
    });
}
}
  