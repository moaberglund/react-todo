import { useState, useEffect } from "react"
import FormData from "../interfaces/FormData"
import './ToDos.scss'

const ToDos = () => {

  // States
  const [todos, setTodos] = useState<FormData[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    readToDos();
  }, [])

  // Functions
  const readToDos = async () => {

    try {

      setLoading(true);

      const resp = await fetch("https://todo-api-qonl.onrender.com/api/todo");

      if (!resp.ok) {
        throw Error;
      } else {
        const data = await resp.json();
        setTodos(data);
        setError(null);
      }

    } catch (error) {
      setError("Could not fetch data from the server, try again later.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="readTodos">

      {error && <p className="info">{error}</p>}
      {loading && <p className="loading">Loading...</p>}

      <div>
        {todos.map((todo: FormData) => (
          <div key={todo._id} className="todo">
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDos