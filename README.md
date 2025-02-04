# To-do app created in React

The App is a simple, interactive to-do list where users can add, update, delete, and track their tasks. The app features drag-and-drop functionality and a user-friendly interface that makes managing tasks easy.

## Features
* Create new to-do tasks
* Read all current to-do tasks
* Update task status using single click or double click
* Delete completed tasks using drag and drop

## API  

The app uses a **REST API** to manage to-do data. The API provides the following endpoints:  

- **GET** `/api/todo`: Retrieves all tasks.  
- **POST** `/api/todo`: Creates a new task.  
- **PUT** `/api/todo/:id`: Updates the status of a specific task.  
- **DELETE** `/api/todo/:id`: Deletes a task.  

#### Example API usage:  

- **Create a ToDo**: Send a `POST` request with task data.  
- **Update a ToDo**: Send a `PUT` request to change its status.  
- **Delete a ToDo**: Send a `DELETE` request to remove a task.  

\
The API is published on [Render](https://todo-api-qonl.onrender.com) \
Feel free to check out the [Repository](https://github.com/moaberglund/ToDo-API)