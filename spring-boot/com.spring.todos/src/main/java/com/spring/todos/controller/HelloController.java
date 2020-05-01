package com.spring.todos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.spring.todos.controller.model.HelloWorldBean;

@RestController
public class HelloController {
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello Raihan spring developer";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Spring developer");
	}
	
	@GetMapping(path="/hello-world-bean/path-variable/{name}")
	public HelloWorldBean hellWorldBeanPathVariable(@PathVariable String name) {
		return new HelloWorldBean("Hello developer "+name);
	}
}
