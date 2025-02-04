import './ToDoForm.scss'
import { useState } from 'react'
import * as Yup from 'yup'
import FormData from '../interfaces/FormData'
import ErrorsData from '../interfaces/ErrorsData'

const ToDoForm = () => {

    // State
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        completed: false
    })

    // Yup
    const validationSchema = Yup.object({
        title: Yup.string().required('Please enter a title, title is required.').min(3, "The title must be at least 3 character."),
        description: Yup.string().max(200, "Description can not be more than 200 characters.")
    })

    // Error state
    const [errors, setErrors] = useState<ErrorsData>({})

    // Submit form
    const submitForm = async (event: any) => {
        event.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });

            // Send data to API
            const response = await fetch('https://todo-api-qonl.onrender.com/api/todo', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            setErrors({});
            setFormData({
                title: '',
                description: '',
                completed: false
            });

        } catch (errors) {
            const validationErrors: ErrorsData = {};

            if (errors instanceof Yup.ValidationError) {
                errors.inner.forEach(error => {
                    const prop = error.path as keyof ErrorsData;

                    validationErrors[prop] = error.message;
                })
                setErrors(validationErrors);
            }

        }
    }

    return (
        <form className="todo-form" onSubmit={submitForm}>

            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} />
            {errors.title && <span className="error-message">{errors.title}</span>}

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} />
            {errors.description && <span className="error-message">{errors.description}</span>}

            <button type="submit">Add</button>

        </form>
    )

}

export default ToDoForm