import './ToDoForm.scss'

const ToDoForm = () => {
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