package com.learning.backend.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();
    private static long idCounter = 0;
    static {
        todos.add(new Todo(++idCounter, "test", "test description", new Date(), false));
        todos.add(new Todo(++idCounter, "test", "test description 1", new Date(), false));
        todos.add(new Todo(++idCounter, "test", "test description 2", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if(todo == null) return null;
        todos.remove(todo);
        return todo;
    }

    public Todo findById(long id) {
        for(Todo todo:todos) {
            if(todo.getId() == id) return todo;
        }
        return null;
    }

    public Todo save(Todo todo) {
        if(Objects.isNull(todo.getId()) || todo.getId() == -1 || todo.getId()==0) {
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }


}
