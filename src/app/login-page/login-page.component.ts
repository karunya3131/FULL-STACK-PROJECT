import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

// In this login page it will check whether we entr the correct values for the feilds and logged in or not
export class LoginPageComponent implements OnInit {
username = '';
  password = '';
  invalidLogin = false
 
  SignUp() {
    if((this.username === '')||(this.password === '')){
var status = confirm("Please fill the required fields");
    }
    else{
      var status = confirm("Thank you for signing in!");
      if (status == true){
      this.router.navigate(['login']); 
}

    }
  }
  constructor(private router: Router,
    private loginService: AuthenticationService) { }

  ngOnInit() {
  }


  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password) ) {
      this.router.navigate(['homepage']);
      console.log("navigate..");
      this.invalidLogin = false;
    } 
    else
      this.invalidLogin = true;
     }

    
}
