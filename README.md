## Installation Steps
### Clone the repo - https://github.com/NarainMuralidharan/User-Authentication.git
### Install dependencies - npm install
### Start the server - node index.js

## API

## Auth Routes:
### POST - /api/auth/register
### POST - /api/auth/login 

## User Routes:
### GET - /api/user/profile

## Example - (User Already Exists in Database)

### Register:
### POST - https://user-authentication-nedw.onrender.com/api/auth/register
```json
{
  "name": "narain",
  "email": "narain2003@gmail.com",
  "password": "forgot"
}
```
### Reponse for Register
```json
{
    "message": "Registered Successfully"
}
```

### Login:
### POST - https://user-authentication-nedw.onrender.com/api/auth/login
```json
{
  "email": "narain2003@gmail.com",
  "password": "forgot"
}
```
### Response for Login (token expires in 1 hour)
```json
{
    "message": "Login Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjQ4ZjA2MDM5ZDhjM2JlOGVkYjM4NyIsImlhdCI6MTczOTg4NjQwMCwiZXhwIjoxNzM5ODkwMDAwfQ.a2Wp2HNq0LHVEfvCPJviK4PNiYj0rdLxAiVqWfLa8tY"
}
```

### User-Profile:
### GET - https://user-authentication-nedw.onrender.com/api/user/profile
### Put token in Headers in Postman

### Response for User-Profile
```json
{
    "message": "success",
    "user": {
        "id": "67b48f06039d8c3be8edb387",
        "username": "narain",
        "email": "narain2003@gmail.com"
    }
}
```


