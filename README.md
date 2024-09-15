
## Node Assignment Application

This is a Node.js and MongoDB application that allows users to manage tasks. It supports creating, viewing, updating, marking as completed, and deleting tasks.

# Features
•	Create Tasks: Add new tasks with a title and description.  
•	View Tasks: List all existing tasks.  
•	Update Tasks: Edit task details such as title and description.  
•	Mark Tasks as Completed: Update the status of tasks to completed.  
•	Delete Tasks: Remove tasks from the list.  
•	Data Persistence: All tasks are stored in a MongoDB database.


# API Endpoints
 Create a Task  :      
The application includes several API endpoints to interact with tasks. To create a new task, the endpoint POST /api/tasks accepts a JSON request body with title and description fields. A successful creation results in a 201 status code along with the created task object.

Get All Tasks :      
To retrieve all tasks, the GET /api/tasks endpoint returns an array of task objects with a 200 status code. For updating task details,

Update Task Details :       
the PUT /api/tasks/:id/details endpoint allows modifications to the title and description of a specific task. A successful update is confirmed with a 200 status code and the updated task object.

 Mark Task as Completed :     
The application also supports marking tasks as completed via the PUT /api/tasks/:id/completed endpoint. The request body should include a completed field set to true. If the task is already marked as completed, the endpoint responds with a 400 status code and an error message. Successful updates are confirmed with a 200 status code and the updated task object.

Delete a Task :     
Finally, tasks can be removed using the DELETE /api/tasks/:id endpoint. This action results in a 200 status code with a message indicating that the task has been deleted.

Error Handling :     
The application is designed to handle errors gracefully. A 404 Not Found error is returned if a task with the specified ID does not exist. If there are issues with the request data, such as missing or invalid information, a 400 Bad Request error is returned. For any server-side errors, a 500 Internal Server Error response is provided.

# Project Structure
The project is organized into several key files and directories. The app.js file is the main entry point of the application. It sets up the Express server, connects to MongoDB, and integrates the routes defined in routes/tasks.js.

The config/db.js file handles the connection to the MongoDB database, ensuring that the application can interact with the database properly. It includes error logging and halts the application if the connection fails.

The models/Task.js file defines the structure of a task using Mongoose schemas. This schema includes fields for title, description, and completed, which are essential for managing tasks within the application.

The routes/tasks.js file contains the route handlers for task-related operations. It separates routes for different actions, such as updating details and marking tasks as completed, to maintain clarity and manageability. The file also includes validation logic to ensure that incoming data is correct before processing.

# Key Decisions
Several important decisions shaped the design of the application. Separating routes for different actions helps to make the API easier to understand and manage. Implementing data validation ensures that only valid data is processed, which helps to prevent errors. Effective error handling provides clear feedback about issues, making it easier to address problems. Adopting a modular design keeps the code organized and maintainable by separating different parts of the application into distinct files.

This version uses paragraphs to explain the features, API endpoints, error handling, and project structure, making the information more readable and cohesive.
