import './ToDoForm.scss'
import { useState } from 'react'
import * as Yup from 'yup'

const ToDoForm = () => {

    interface FormData {
        title: string,
        description: string,
        completed: boolean
    }

    // State
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        completed: false
    })
    
  return (
    <form className="todo-form">

        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />

        <button type="submit">Add</button>

    </form>
  )
}

export default ToDoForm