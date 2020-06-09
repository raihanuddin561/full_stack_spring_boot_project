package com.spring.todos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	
	@DeleteMapping(path="/delete/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		Todo todo = todoService.deleteById(id);
		if(todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
