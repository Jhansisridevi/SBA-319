# Media Post Editor Application

## Description
This Media Post Editor application,provides functionality for managing users and their media posts. Some the key features include User Management, Post management, Post editing(PATCH), post deletion(DELETE), Data validation on server-side and database-side to maintain data integrity. The application's routes and models are organized for clarity and maintainability, following best practices for building robust web applications.

## Technology Stack 
* Node.js and Express for server-side development.
* MongoDB as the NoSQL database for storing user and post data.
* Mongoose as an ODM (Object Data Modeling) library for MongoDB and Node.js.


## Setup
* Clone the repository

* Install Dependencies

`npm install`

* npm start

`npm start`

## Example Usage
* Add a new user
 ```POST http://localhost:3500/users
 Content-Type: application/json

{
"username": "Bob", "email": "bob@emfh.io"
}```



