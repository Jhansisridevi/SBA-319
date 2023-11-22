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
 ```
 POST http://localhost:3500/users
 Content-Type: application/json

{
"username": "Bob", "email": "bob@emfh.io"
}
```
* Read an existing user 
`GET http://localhost:3500/655e7553108246f9a218798c`

* Add a new post 
```
POST http://localhost:3500/users/655e7553108246f9a218798c/posts
Content-Type: application/json

{
    "content": "Trial 18",
    "media": "http://www.alex.io",
    "title": "Carousel",
    "description": "content related to holidays carousel"
}
```

* Update an existing post 
``
PATCH http://localhost:3500/users/655e7553108246f9a218798c/posts/655e7583108246f9a2187990
Content-Type: application/json

{
    "content": "Updating Trail 18 ",
    "media": "http://www.alex.io",
    "title": "Quotes",
    "description": "Quotes Media content has been updated throuh Patch trial 18"
}
``

* Delete an user 
`DELETE http://localhost:3500/655e7431ef15ac407eab1b93`


