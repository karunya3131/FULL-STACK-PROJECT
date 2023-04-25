import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAirlinedetailsComponent } from './create-airlinedetails/create-airlinedetails.component';
import { UpdateAirlinedetailsComponent } from './update-airlinedetails/update-airlinedetails.component';
import { DisplayAirlinedetailsComponent } from './display-airlinedetails/display-airlinedetails.component';
import { DisplayAllAirlinedetailsComponent } from './display-all-airlinedetails/display-all-airlinedetails.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { SignupComponent } from './signup/signup.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAirlinedetailsComponent,
    UpdateAirlinedetailsComponent,
    DisplayAirlinedetailsComponent,
    DisplayAllAirlinedetailsComponent,
    LoginPageComponent,
    LogoutPageComponent,
    SignupComponent,
    FeedbackComponent,
    ContactusFormComponent,
    ProfileCardComponent,
    HomepageComponent,
    TicketBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
