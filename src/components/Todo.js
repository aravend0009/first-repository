import React, { useState } from 'react'
import './Todo.css'
import { ImCancelCircle } from "react-icons/im";
import { AiTwotoneEdit } from "react-icons/ai";

function Todo(props) {

  const [text,setEditText] = useState(props.todo.text)

  const editText  = e => {
      setEditText(e.target.value)
  }

  return (
    <li className="list-item">
      {props.todo.edit ? 
      <>
        <div>
            <input type="text" value={text} onChange={editText}/>  
        </div>
        <div>
            <button className="update-button" onClick={() =>{props.updateTodo(text,props.todo.id)}}>Update</button>
        </div>
      </>:
      <>
      <div>
          {props.todo.text}
      </div>
      <div>
            <AiTwotoneEdit className="edit" onClick={()=>{props.editTodo(props.todo.id)}}/>
            <ImCancelCircle className="delete" onClick={()=>{props.deleteTodo(props.todo.id)}}/>
      </div>
      </>
      }
    </li>
  )
}

export default Todo