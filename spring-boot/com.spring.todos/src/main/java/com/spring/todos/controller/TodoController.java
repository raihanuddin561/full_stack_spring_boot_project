package com.spring.todos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.spring.todos.model.Todo;
import com.spring.todos.services.TodoService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
	@GetMapping(path="/get/{username}/todos")
	public List<Todo> getTodo(@PathVariable String username){
		return todoService.getTodo();
	}
}