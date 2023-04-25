package com.example.demo.repository;  

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Airline;

@Repository  //Whenever the server gets started this repository will be automatically get registered 
public interface AirlineRepository extends JpaRepository<Airline,Long>{

	List<Airline> findByairlineNameContaining(String name);

	 List<Airline> findByisInternationalFlight(boolean isInternational);

}
