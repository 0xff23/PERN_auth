# PERN_auth
PERN authentication [postgresql, express, react, nodejs]

## db
```
d_auth=# table users;
 user_id |      email       |                           password                           | created_at
---------+------------------+--------------------------------------------------------------+------------
       1 | test@gmail.com   | $2a$10$HuXD3Q.mru438HHgZ.oDzuroyqvuhwZtlHiC/QZ6C0CV6HilNaJeu | 2023-11-26
       2 | test6@gmail.com  | $2a$10$9.U3/ghrgyLWYEKsm4S9AOZ9sUxq3ANvLsgCS6DFRXleVR8FQDOeC | 2023-11-26
       3 | test61@gmail.com | $2a$10$TWBwYMikcJj6tQXkebTCHeLH7OyZZBZvupHD/f6fJcMSX8OGdwX4C | 2023-11-26
(3 rows)
```

## GET /api/get-users
```
{
    "success": true,
    "users": [
        {
            "user_id": 1,
            "email": "test@gmail.com"
        },
        {
            "user_id": 2,
            "email": "test6@gmail.com"
        },
        {
            "user_id": 3,
            "email": "test61@gmail.com"
        }
    ]
}
```
-----------------------------------------------------------------------

## POST /api/register
### in
```
{
    "email": "test61@gmail.com",
    "password": "1234567"
}
```
### out:
```
{
    "success": true,
    "users": [
        {
            "user_id": 1,
            "email": "test@gmail.com"
        },
        {
            "user_id": 2,
            "email": "test6@gmail.com"
        },
        {
            "user_id": 3,
            "email": "test61@gmail.com"
        }
    ]
}
```
-----------------------------------------------------------------------
## GET /api/login
### in
```
{
    "email": "test61@gmail.com",
    "password": "1234567"
}
```
### out:
```
{
    "success": true,
    "message": "Logged in succefully"
}
```
-----------------------------------------------------------------------
## GET /api/secured
### in
```
{
    "email": "test61@gmail.com",
    "password": "1234567"
}
```
### out:
```
{
    "info": "secured data is available"
}
```
-----------------------------------------------------------------------
## GET /api/logout
### in
```
{
    "email": "test61@gmail.com",
    "password": "1234567"
}
```
### out:
```
{
    "success": true,
    "message": "Logged out succefully"
}
```
