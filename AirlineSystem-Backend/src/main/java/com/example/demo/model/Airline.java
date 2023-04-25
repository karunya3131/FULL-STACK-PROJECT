package com.example.demo.model;

import org.hibernate.annotations.DynamicUpdate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//Entity annotation defines that a class can be mapped to a table
@Entity
@Table(name="airline_NewTable")
//DynamicUpdate ensures that Hibernate uses only the modified columns in the SQL statement that it generates for the update of an entity
@DynamicUpdate
public class Airline {

	/* @Id must be given to the entity classes, in which makes
	 * the attributes to act as primary key.In @GeneratedValue, what
	 * type of primary key to be generated is given in it. Here,primary key
	 * type IDENTITY is given which starts by 1 and increments by 1.
	 */
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long airlineId;
	private String airlineName;
	private String origin;
	private String destination;
	private Integer seatingCapacity;
	private Integer cost;
	private Integer numberOfSeats;
	private Integer calculatedCost;
    private Boolean isInternationalFlight;
	

	public Airline() {

	}

	public Airline(Long airlineId, String airlineName, String origin, String destination, Integer seatingCapacity,Integer cost,Integer numberOfSeats,Integer calculatedCost,Boolean isInternationalFlight) {
		
		this.airlineId = airlineId;
		this.airlineName = airlineName;
		this.origin = origin;
		this.destination = destination;
		this.seatingCapacity = seatingCapacity;
		this.cost = cost;
		this.numberOfSeats=numberOfSeats;
		this.calculatedCost = calculatedCost;
		this.isInternationalFlight = isInternationalFlight;
	}

	/*Here we used setter method for all the attributes to set the value
	 *This keyword is refers to the current class object and also 
	 *as the names are similar we used this keyword.
	 *Here we used getter method for  all the attributes to return it's value.
	 */
	public Long getAirlineId() {
		return airlineId;
	}
	public void setAirlineId(Long airlineId) {
		this.airlineId = airlineId;
	}
	public String getAirlineName() {
		return  airlineName;
	}
	public void setAirlineName(String airlineName) {
		this. airlineName =  airlineName;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String source ) {
		this.origin = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination ) {
		this. destination=  destination;
	}
	public Integer getSeatingCapacity() {
		return seatingCapacity;
	}
	public void setSeatingCapacity(Integer seatingCapacity) {
		this.seatingCapacity= seatingCapacity;
	}
	public Integer getCost() {
		return  cost;
	}
	public void setCost(Integer cost) {
		this. cost=cost;
	}
	public Integer getNumberOfSeats() {
		return numberOfSeats;
	}

	public void setNumberOfSeats(Integer numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
	}

	public Integer getCalculatedCost() {
		return calculatedCost;
	}

	public void setCalculatedCost(Integer calculatedCost) {
		this.calculatedCost = calculatedCost;
	}

	public Boolean getIsInternationalFlight() {
		return isInternationalFlight;
	}

	public void setIsInternationalFlight(Boolean isInternationalFlight) {
		this.isInternationalFlight = isInternationalFlight;
	}


}
