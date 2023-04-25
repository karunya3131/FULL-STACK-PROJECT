import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.css']
})
export class ContactusFormComponent implements OnInit {

//When we click the submit button it will check and redirect us to homepage

  name = '';
  email = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  SendButton() {
    if((this.name === '')||(this.email === '')){
      var status = confirm("Please fill the required fields");
    }
    else{
      var status = confirm("Thank you for contacting us!");
      if (status == true){
      this.router.navigate(['homepage']); 
}
    }
  }
}
