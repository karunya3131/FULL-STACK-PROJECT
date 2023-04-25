package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//This is the main method of this project ,
//here we have @SpringBootApplication annotation as it scan all the 3 componentscan,autoconfiguration and springbootapplication
@SpringBootApplication
public class AirlineSystemBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirlineSystemBackendApplication.class, args);

	}

}
