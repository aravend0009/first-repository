import React,{useState} from 'react'
import './TodoForm.css'

const TodoForm = (props) => {

  const [input , setInput] = useState('')

  const handleChange = e => {
      setInput(e.target.value)
  }

  const handleSubmit = e => {
      e.preventDefault()
      props.onSubmit({
          id: Math.random() * 10000,
          text: input,
          edit: false
      })
      setInput('')
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} placeholder="Add a Todo"/>
            <button className='add-button'>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm