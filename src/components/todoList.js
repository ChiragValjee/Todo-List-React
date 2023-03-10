import React from "react";
import {useState} from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

function TodoList() {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)

    }

    function removeTodo(id) {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    function updateTodo(todoId, newValue) {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    }


    function completeTodo(id) {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1 className="heading">What do you need to do today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>

        </div>
    )
}

export default TodoList