# rest-api (First Anchor)

## Basic routes
### GET 
    1. /api/hello?name={name}
        - Print hello, {name}!

## User routes
### GET
    1. /api/users
        - Get all the users
    2. /api/users/:id
        - Get a single user

### POST
    1. /api/users
        - Body {
            name: String,
            email: String,
            password: String
        }
        - Create a user

### DELETE
    1. /api/users/:id
        - Delete a user

### PUT
    1. /api/users/:id
        - Update a user with new info

## Filter routes
### GET
    1. /api/users?name=<KEYWORD>
        - Get users by name

# rest-api (Second Anchor)

## User Routes
### GET
        1. /api/users
                - Get all users
        2. /api/users/:id
                - Get user by ID
### POST
        1. /api/users
                - Create user
### DELETE
        1. /api/users/:id
                - Delete user by ID
### PUT
        1. /api/users/:id
                - Update user by ID

## Todo Routes

### GET
        1. /api/todos
                - Get all Todos
        2. /api/todos/:id
                - Get todo by ID
### POST
        1. /api/todos
                - Create todo
### DELETE
        1. /api/todos/:id
                - Delete todo by ID
### PUT
        1. /api/todos/:id
                - Update all todo values by ID
### PATCH
        1. /api/todos/:id
                - Update todo by ID