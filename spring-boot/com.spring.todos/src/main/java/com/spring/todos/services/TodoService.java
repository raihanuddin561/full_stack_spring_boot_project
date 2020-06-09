package com.spring.todos.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.todos.model.Todo;
@Service
public class TodoService {
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int idCount=0;
	static {
		todos.add(new Todo(++idCount,"Learning spring boot",new Date(),false));
		todos.add(new Todo(++idCount,"Learning Algorithm",new Date(),false));
		todos.add(new Todo(++idCount,"Learning Database",new Date(),false));

	}
	public List<Todo> getTodo(){
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
}
