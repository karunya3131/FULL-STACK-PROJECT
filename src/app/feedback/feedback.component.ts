import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  feedback(){
    var status = confirm("Thank you for giving feedback!");
    if (status == true){
      this.router.navigate(['homepage']); 
   }
  
}
}
