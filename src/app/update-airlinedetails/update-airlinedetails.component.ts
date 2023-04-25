import { Component, OnInit } from '@angular/core';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-update-airlinedetails',
  templateUrl: './update-airlinedetails.component.html',
  styleUrls: ['./update-airlinedetails.component.css']
})

//For updating an airline details by using id we have some functions to perform and they are below.
export class UpdateAirlinedetailsComponent implements OnInit{
  airlineId: number = 0;
  airline: Airline = new Airline();
  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.airlineId = this.route.snapshot.params['airlineId'];

    this.airlineService.displayAirlineDetailsById(this.airlineId).subscribe( data => {
      this.airline = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.airlineService.updateAirlineDetails(this.airlineId, this.airline).subscribe( data =>{
      this.goToAirlineList();
    }
    , error => console.log(error));
  }

  goToAirlineList(){
    this.router.navigate(['display-all-airlinedetails']);
  }
}
