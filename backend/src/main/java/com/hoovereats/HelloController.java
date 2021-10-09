package com.hoovereats;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/")
	public String index() {
        System.out.print("hello");
		return "Greetings from Spring Boot!";
        
	}

}