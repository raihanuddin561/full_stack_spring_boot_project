package com.spring.todos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.todos.model.Todo;
import java.lang.String;
import java.util.List;
@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>  {
	List<Todo> findByUsername(String username);
}
