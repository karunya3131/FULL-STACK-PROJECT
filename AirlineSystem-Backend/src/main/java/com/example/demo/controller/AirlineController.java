package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.exceptionHandling.NotFoundClass;
import com.example.demo.model.Airline;
import com.example.demo.repository.AirlineRepository;

//from angular it will get the value,whenever anyone click this link.
@CrossOrigin(origins = "http://localhost:4200")
//to show the mapping in airline to server we are using this
//for each mapping we have to write responsebody for that we are using restcontroller here
@RestController
@RequestMapping("/ARS/") //before all mapping it should be placed
public class AirlineController {

	@Autowired  //bytype and  byname  //not necessary to have this as we have only one attr
	//using this as reference we can call all the hibernate methods
	private AirlineRepository airlineRepo; 

	//WITHOUT USING ANY SERVICE CLASS DIRECTLY WE ARE USING IN REPO CLASS


	/* Creating airline details 
	 * @PostMapping annotation maps HTTP POST requests into this method.
	 * @RequestBody annotation-details given in request from user/raw(body in postman)are stored here 	
	 */
	@PostMapping("/airlineDetails")
	public ResponseEntity <Airline >createAirlineDetails(@RequestBody Airline airline) {
		Airline createDetails=airlineRepo.save(airline);
		try {
			return new ResponseEntity<>(createDetails,HttpStatus.CREATED);
		
		}
		catch(Exception e){
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
			
		}
	}

	/* Getting all the airline-details.
	 * @GetMapping maps the HTTP GET requests on the  method.
	 * Here we get the airline records which are in the database. 
	 */

	@GetMapping("/airlineDetails")
	public ResponseEntity<List<Airline>> displayAllAirlineDetails(@RequestParam(required = false)String name){
		try {
			List<Airline> airlineList = new ArrayList<Airline>();
			if(name!=null) {
				airlineRepo.findByairlineNameContaining(name).forEach(airlineList::add);
				return new ResponseEntity<>(airlineList,HttpStatus.OK);
			}else {
				airlineList = airlineRepo.findAll();
			return new ResponseEntity<>(airlineList,HttpStatus.OK);
			
			}}catch (Exception e) {
				return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
			}     
	}
	/* Getting airline-details by id 
	 * @GetMapping maps the HTTP GET requests on the  method by id
	 * @ResponseEntity represents an HTTP response, including status.
	 * @PathVariable is used to set the values,like getparameter in mvc's
	 * If the request went through,a 200 OK is returned,
	 * while a 404 Not Found is returned if the resource isn't found on the server.
	 */
	@GetMapping("/airlineDetails/{id}")
	public ResponseEntity<Airline> getAirlineDetailsById(@PathVariable Long id) {
		Airline airline = airlineRepo.findById(id)
				.orElseThrow(() -> new NotFoundClass("Airline not exist with id :" + id));
		return ResponseEntity.ok(airline);
	}

	/* Updating the airline-details by id
	 * PUT HTTP method is used to update or modify the records with the help of id
	 * @PutMapping annotation is used for mapping HTTP PUT requests on the method.
	 * If the request went through,a 200 OK is returned,
	 * while a 404 Not Found is returned if the resource isn't found on the server.
	 */
	@PutMapping("/airlineDetails/{id}")
	public ResponseEntity<Airline> updateAirlineDetails(@PathVariable Long id, @RequestBody Airline airlineDetails){
		Airline airline = airlineRepo.findById(id)
				.orElseThrow(() -> new NotFoundClass("Airline not exist with id :" + id));

		airline.setAirlineName(airlineDetails.getAirlineName());
		airline.setOrigin(airlineDetails.getOrigin());
		airline.setDestination(airlineDetails.getDestination());
		airline.setSeatingCapacity(airlineDetails.getSeatingCapacity());
		airline.setCost(airlineDetails.getCost());

		Airline updatedAirline = airlineRepo.save(airline);
		return ResponseEntity.ok(updatedAirline);
	}

	/* Deleting the airline-details by id
	 * @DeleteMapping annotation maps HTTP DELETE requests on the method and delete the records with the help of id
	 * The HTTP 200 OK success status response code indicates that the request has succeeded.
	 */
	@DeleteMapping("/airlineDetails/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteAirlineDetails(@PathVariable Long id){
		Airline airline = airlineRepo.findById(id)
				.orElseThrow(() -> new NotFoundClass("Airline not exist with id :" + id));

		airlineRepo.delete(airline);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	/* Updating the airline-details booking by id
	 * PUT HTTP method is used to update or modify the records with the help of id
	 * @PutMapping annotation is used for mapping HTTP PUT requests on the method.
	 * If the request went through,a 200 OK is returned,
	 * while a 404 Not Found is returned if the resource isn't found on the server.
	 */
	@PutMapping("/airlineDetails/bookairline/{id}")
	public ResponseEntity<Airline> bookAirlineDetails(@PathVariable Long id, @RequestBody Airline airlineDetails){
		Airline airline = airlineRepo.findById(id)
				.orElseThrow(() -> new NotFoundClass("Airline not exist with id :" + id));
		airline.setSeatingCapacity(airlineDetails.getSeatingCapacity());
        airline.setNumberOfSeats(airlineDetails.getNumberOfSeats());
		airline.setCalculatedCost(airlineDetails.
				getCalculatedCost());

		Airline updatedAirline = airlineRepo.save(airline);
		return ResponseEntity.ok(updatedAirline);
	}
	
	/* Deleting the airline-details entirely
	 * @DeleteMapping annotation maps HTTP DELETE requests on the method and delete the records with the help of id
	 * The HTTP 200 OK success status response code indicates that the request has succeeded.
	 */
	@DeleteMapping("/airlineDetails")
	public ResponseEntity<HttpStatus> deleteAllAirlines(){
		try {
			airlineRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/* Getting all the airline-details only if it is international flights.
	 * @GetMapping maps the HTTP GET requests on the  method.
	 * Here we get the airline records which are in the database. 
	 */
	@GetMapping("/airlineDetails/airlineType")
	public ResponseEntity<List<Airline>> findByFlight(){
		try {
			List<Airline> airlineflightList = airlineRepo.findByisInternationalFlight(true);
			if(airlineflightList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
				return new ResponseEntity<>(airlineflightList,HttpStatus.OK);
			
		}catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}    
}
	/* Getting all the airline-details only if it is domestic flights..
	 * @GetMapping maps the HTTP GET requests on the  method.
	 * Here we get the airline records which are in the database. 
	 */
	@GetMapping("/airlineDetails/airlineDomesticType")
    public ResponseEntity<List<Airline>> findByDomesticFlight(){
		try {
			List<Airline> airlineflightList = airlineRepo.findByisInternationalFlight(false);
			if(airlineflightList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
				return new ResponseEntity<>(airlineflightList,HttpStatus.OK);
			
		}catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}    
}
}
