Node Assignment Application

Overview
This is a application built with Node.js and MongoDB. It allows users to create tasks, view all tasks, mark tasks as completed, edit task details, and delete tasks.


Features
•	Create Tasks: Add new tasks with a title and description.
•	View Tasks: List all existing tasks.
•	Update Tasks: Edit task details such as title and description.
•	Mark Tasks as Completed: Update the status of tasks to completed.
•	Delete Tasks: Remove tasks from the list.
•	Data Persistence: All tasks are stored in a MongoDB database.

API Endpoints
Create a Task : Add new tasks with a title and description.
•	Endpoint: POST /api/tasks
•	Request Body:
json
Copy code
{
  "title": "Task Title",
  "description": "Task Description"
}
•	Success Response:
o	Code: 201
o	Content: The created task object.

Get All Tasks : List all existing tasks.
•	Endpoint: GET /api/tasks
•	Success Response:
o	Code: 200
o	Content: Array of task objects.

Update Task Details : Edit task details such as title and description.
•	Endpoint: PUT /api/tasks/:id/details
•	Request Body:
json
Copy code
{
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
•	Success Response:
o	Code: 200
o	Content: The updated task object.

Mark Task as Completed : Update the status of tasks to completed.
•	Endpoint: PUT /api/tasks/:id/completed
•	Request Body:
json
Copy code
{
  "completed": true
}
•	Success Response:
o	Code: 200
o	Content: The updated task object.
•	Error Response:
o	Code: 400
o	Content: Error message if the task is already completed.

Delete a Task : Remove tasks from the list.
•	Endpoint: DELETE /api/tasks/:id
•	Success Response:
o	Code: 200
o	Content: { "message": "Task deleted" }

Error Handling
•	404 Not Found: Returned if a task with the specified ID does not exist.
•	400 Bad Request: Returned if required data is missing or invalid.
•	500 Internal Server Error: Returned for server-side errors.

Code Structure
Project Root

app.js: Starts the server, connects to MongoDB, and sets up routes.
config/db.js: Connects to the MongoDB database.
models/Task.js: Defines the structure of a task.
routes/tasks.js: Contains the routes for handling task-related operations.
File Details

app.js

Purpose: Sets up the Express server and connects to MongoDB.
Key Decisions:
Uses middleware for parsing JSON.
Includes routes from routes/tasks.js.
config/db.js

Purpose: Manages the connection to MongoDB.
Key Decisions:
Logs connection errors and stops the app if the connection fails.
models/Task.js

Purpose: Defines what a task looks like in the database.
Key Decisions:
Includes fields for title, description, and completed.
routes/tasks.js

Purpose: Handles API requests for tasks.
Key Decisions:
Keeps routes for different actions (like updating details and marking as completed) separate.
Uses validation to ensure data is correct before processing.
Key Decisions
Separate Routes:

Reason: Makes the API easier to understand and manage by splitting different actions into separate routes.
Data Validation:

Reason: Ensures that only valid data is processed, which helps avoid errors.
Error Handling:

Reason: Provides clear feedback on what went wrong, making it easier to fix issues.
Modular Design:

Reason: Keeps the code organized and easier to maintain by separating different parts of the application into their own files.
