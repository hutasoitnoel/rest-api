Heroku link: https://afternoon-fortress-16675.herokuapp.com

# rest-api (First Anchor)

## Basic routes
### GET 
1. ROUTES:

        /api/hello?name={name}
* Description:

        Print "hello, {name}!"

## User routes
### GET
1. ROUTES: 

        /api/users

* Desciption

        Get all the users

2. ROUTES: 

        /api/users/:id

* Description

        Get a single user

### POST
1. ROUTES: 

        /api/users
* Description:

        Create a user

* Input:

        {
            name: String,
            email: String,
            password: String
        }

### DELETE
1. ROUTES:

        /api/users/:id

* Description:

        Delete a user

### PUT

1. ROUTES:

        /api/users/:id

* Description:

        Update a user with new info

## Filter routes
### GET
1. ROUTES: 

        /api/users?name=<KEYWORD>

* Description:

        Get users by name

# rest-api (Second Anchor)

## User Routes
### GET

1. ROUTE:

        http://localhost:4000/api/users
* Description:

        Find all users
* Response (Status: 200)

        Array of objects of all users
        [
                {
                        "id": ...,
                        "username": ...,
                        "password": ...,
                        "createdAt": ...,
                        "updatedAt": ...
                },
                ...
        ]

* Reject (Status: 500)

        Internal server error

2. ROUTE:

        /api/users/:id
* Description:

        Find one user according to ID
* Response (Status: 200)
        
        User object according to ID
        {
                "id": ...,
                "username": ...,
                "password": ...,
                "createdAt": ...,
                "updatedAt": ...
        }
        
* Reject (Status: 400)

        User not found
        
### POST

1. ROUTE:

        http://localhost:4000/api/users
* Description:

        Create new user
* Response (Status: 200)

        Object of recently created user
        {
                "id": ...,
                "username": ...,
                "password": ...,
                "createdAt": ...,
                "updatedAt": ...
        }

* Reject (Status: 500)

        Internal server error
        
### DELETE

1. ROUTE:

        http://localhost:4000/api/users/:id
* Description:

        Delete user according to ID
* Response (Status: 200)

        Successfully deleted

* Reject (Status: 400)

        User not found
### PUT

1. ROUTE:

        http://localhost:4000/api/users/:id
* Description:

        Update user according to ID
* Response (Status: 200)

        Update success

* Reject (Status: 400)

        User not found
        
## Todo Routes

### GET

1. ROUTE:

        http://localhost:4000/api/todos
* Description:

        Find all todos
* Response (Status: 200)

        Array of objects of all todos
        [
                {
                        "id": ...,
                        "title": ...,
                        "description": ...,
                        "user_id":...,
                        "createdAt": ...,
                        "updatedAt": ...
                },
                ...
        ]

* Reject (Status: 500)

        Internal server error

2. ROUTE:

        /api/todos/:id
* Description:

        Find one todo according to ID
* Response (Status: 200)
        
        Todo object according to ID
        {
                "id": ...,
                "title": ...,
                "description": ...,
                "user_id":...,
                "createdAt": ...,
                "updatedAt": ...
        }
        
* Reject (Status: 401)

        ${req.decoded.username} is not authorized
        
### POST

1. ROUTE:

        http://localhost:4000/api/todos
* Description:

        Create new todo
* Response (Status: 200)

        Object of recently created todo
        {
                "id": ...,
                "title": ...,
                "description": ...,
                "user_id":...,
                "createdAt": ...,
                "updatedAt": ...
        }

* Reject (Status: 500)

        Internal server error
        
### DELETE

1. ROUTE:

        http://localhost:4000/api/todos/:id
* Description:

        Delete todo according to ID
* Response (Status: 200)

        Successfully deleted

* Reject (Status: 401)

        ${req.decoded.username} is not authorized
### PUT

1. ROUTE:

        http://localhost:4000/api/todos/:id
* Description:

        Update all values of todo according to ID
* Response (Status: 200)

        Update success

* Reject (Status: 400)

        Please fill title and description

* Reject (Status: 401)

        ${req.decoded.username} is not authorized

### PATCH
1. ROUTE:

        http://localhost:4000/api/todos/:id
* Description:

        Update todo according to ID
* Response (Status: 200)

        Update success

* Reject (Status: 401)

        ${req.decoded.username} is not authorized