package com.spring.todos.controller;

import java.net.URI;
import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.spring.todos.model.Todo;
import com.spring.todos.repository.TodoJpaRepository;
import com.spring.todos.services.TodoService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoController {
	@Autowired
	private TodoService todoService;
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	@GetMapping(path="/get/{username}/todos")
	public List<Todo> getTodo(@PathVariable String username){
		return todoJpaRepository.findByUsername(username);
	}
	
	@GetMapping(path="/get/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable long id){
		return todoJpaRepository.findById(id).get();
		//return todoService.findById(id);
	}
	
	@DeleteMapping(path="/delete/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		Todo todo = todoJpaRepository.findById(id).get();
		if(todo != null) {
			return ResponseEntity.noContent().build();
		}else {
			todoJpaRepository.deleteById(id);
			return ResponseEntity.notFound().build();
		}
		
	}
	@PutMapping("/update/{username}/todos/{id}")
	public ResponseEntity<Todo> update(@PathVariable String username, @PathVariable long id,@RequestBody Todo todo){
		Todo updatedTodo = todoJpaRepository.save(todo);
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	}
	
	@PostMapping("/create/{username}/todos")
	public ResponseEntity<Todo> saveTodo(@PathVariable String username,@RequestBody Todo todo){
		Todo createdTodo = todoJpaRepository.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri(); 
		return  ResponseEntity.created(uri).build();
	}
	
}
