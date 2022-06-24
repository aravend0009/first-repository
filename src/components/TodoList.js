import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css'

function TodoList() {
  const [todos,setTodos] = useState([])

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text))
    {
      return
    }
      setTodos([...todos,todo])
  }

  const editTodo = id => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
         todo.edit = true
        }
      return todo
  } ))
  }

  const updateTodo = (text,id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
         todo.edit = false
         todo.text = text
        }
      return todo
  } ))
  }

  const deleteTodo = id => {
      const filterTodos = todos.filter(todo => todo.id !== id )
      setTodos(filterTodos)
  }
  
  return (
    <div>
        <TodoForm onSubmit={addTodo}/>
        <ul className="list">
            {todos.map( todo =>
                <Todo key={todo.id} todo={todo} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                updateTodo={updateTodo}/>
            )}
        </ul>
        
    </div>
  )
}

export default TodoList