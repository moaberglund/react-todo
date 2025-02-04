import './ToDoForm.scss'
import { useState } from 'react'
import * as Yup from 'yup'

const ToDoForm = () => {

    interface FormData {
        title: string,
        description: string,
        completed: boolean
    }

    interface ErrorsData {
        name?: string,
        description?: string
    }

    // State
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        completed: false
    })

    // Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter a title, title is required.').min(3, "The title must be at least 3 character."),
        description: Yup.string().max(200, "Description can not be more than 200 characters.")
    })

    // Error state
    const [errors, setErrors] = useState<ErrorsData>({})

  return (
    <form className="todo-form" onSubmit={submitForm}>

        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })}  />

        <button type="submit">Add</button>

    </form>
  )
}

export default ToDoForm