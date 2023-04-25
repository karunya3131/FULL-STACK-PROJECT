import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAirlinedetailsComponent } from './create-airlinedetails/create-airlinedetails.component';
import { UpdateAirlinedetailsComponent } from './update-airlinedetails/update-airlinedetails.component';
import { DisplayAirlinedetailsComponent } from './display-airlinedetails/display-airlinedetails.component';
import { DisplayAllAirlinedetailsComponent } from './display-all-airlinedetails/display-all-airlinedetails.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

//Here we have the path for the respective page here
const routes: Routes = [
  {path: 'create-airlinedetails', component: CreateAirlinedetailsComponent,canActivate:[AuthGuardService] },
  {path: 'display-all-airlinedetails', component: DisplayAllAirlinedetailsComponent,canActivate:[AuthGuardService] },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'display-airlinedetails/:airlineId', component: DisplayAirlinedetailsComponent,canActivate:[AuthGuardService] },
  {path: 'update-airlinedetails/:airlineId', component: UpdateAirlinedetailsComponent,canActivate:[AuthGuardService] },
  {path: 'login', component: LoginPageComponent},
  {path: 'logout', component: LogoutPageComponent,canActivate:[AuthGuardService] },
  {path: 'profile-card', component: ProfileCardComponent,canActivate:[AuthGuardService]},
  {path: 'contactus', component: ContactusFormComponent,canActivate:[AuthGuardService] },
  {path: 'feedback', component: FeedbackComponent,canActivate:[AuthGuardService]},
  {path: 'homepage', component: HomepageComponent,canActivate:[AuthGuardService]},
  {path: 'ticket-booking/:airlineId', component: TicketBookingComponent,canActivate:[AuthGuardService]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

