package com.example.demo.exceptionHandling;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//If a particular id doesn't exist exception will occur,to handle that we created this class
@ResponseStatus(value = HttpStatus.NOT_FOUND) //if there is no value it will show not found message
public class NotFoundClass extends RuntimeException{ //only runtime will occur in this case

	/**whenever creating an object to this class par cons will get called
	 * object convert into bytestream,so for each bytestream id will be given  here
	 * RuntimeException is implementing serializable interface so we r using this unique id 
	 **/
	private static final long serialVersionUID = 1L;

	public NotFoundClass(String message) {
		super(message);//it will go to the parent class and fill the given details
	}


}
