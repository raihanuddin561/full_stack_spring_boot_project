package com.spring.todos.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.todos.model.AuthenticationBean;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthController {
	@GetMapping("/basicauth")
	public AuthenticationBean basicAuth() {
		return new AuthenticationBean("You are authenticated");
	}
}
