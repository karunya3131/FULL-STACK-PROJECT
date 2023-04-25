import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Airline } from './airline';

@Injectable({
  providedIn: 'root'
})
//This is the airline service class  where we have the baseurl and the functions to perform with the backend.
export class AirlineService {
  
  private baseURL = "http://localhost:8080/ARS/airlineDetails";
  
  constructor(private httpClient: HttpClient) { }

  createAirlineDetails(airline: Airline): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, airline);
  }
  displayAllAirlineDetails(): Observable<Airline[]> {
    return this.httpClient.get<Airline[]>(`${this.baseURL}`);
  }
  displayAirlineDetailsById(airlineId: number): Observable<Airline> {
    return this.httpClient.get<Airline>(`${this.baseURL}/${airlineId}`);
  }
  updateAirlineDetails(airlineId: number, airline: Airline): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${airlineId}`, airline);
  }
  deleteAirlineDetails(airlineId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${airlineId}`);
  }
  bookAirlineDetails(airlineId: number,airline : Airline) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/bookairline/${airlineId}`, airline);
  }
  deleteAll():Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(name:any): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}?name=${name}`); 
  }
  findByInternationalFlight(): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/airlineType`);
  }
  findByDomesticFlight(): Observable<Airline[]>{
    return this.httpClient.get<Airline[]>(`${this.baseURL}/airlineDomesticType`);
  }
}
