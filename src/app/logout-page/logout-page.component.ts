import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
//When we click logout it will come to this page and perfomr this functions
export class LogoutPageComponent implements OnInit{
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
   
    var status = confirm("Do you really want to logout?"); 
    if(status == true){
      this.authenticationService.logOut();
      this.router.navigate(['logout']);
      console.log("navigate..");
    }else{
      this.router.navigate(['homepage']);
    }
  }

}
