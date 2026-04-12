# Account API Spec

## GET Accounts API

Endpoint : GET /api/accounts

Response Body Success :

```json
{
    "status": "success",
    "message": "Account retrieved",
    "data": [
        {
            "_id": "xxx",
            "accountNumber": "xxx",
            "balance": 1000000,
            "userId": "xxx",
            "createdAt": "xxx",
            "updatedAt": "xxx"
        }
    ]
}
```

## GET Accounts By Id API

Endpoint : GET /api/accounts/:id

Response Body Success :

```json
{
    "status": "success",
    "message": "Account retrieved",
    "data": {
            "_id": "xxx",
            "accountNumber": "xxx",
            "balance": 1000000,
            "userId": "xxx",
            "createdAt": "xxx",
            "updatedAt": "xxx"
    }
}
```
Response Body Error:

```json
{
	"statusCode": 404,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "account is not found"
}
```
```json
{
	"statusCode": 400,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "Invalid account ID"
}
```
## CREATE Accounts API

Endpoint : POST /api/accounts

Request Body:
```json
{
    "balance": 10000,
    "userId": "xxx"
}
```

Response Body Success :

```json
{
	"status": "success",
	"message": "Account created",
	"data": {
		"accountNumber":"xxx",
		"balance": 10000,
		"userId": "xxx",
		"_id": "xxx",
		"createdAt": "2026-04-12T19:30:09.765Z",
		"updatedAt": "2026-04-12T19:30:09.765Z",
		"__v": 0
	}
}
```

Response Body Error : 

```json
{
	"statusCode": 400,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "\"balance\" must be greater than or equal to 0"
}
```
## UPDATE Accounts API

Endpoint : PATCH /api/accounts/:id

Request Body:
```json
{
    "balance": 10000
}
```

Response Body Success :

```json
{
	"status": "success",
	"message": "Account updated",
	"data": {
		"_id": "xxx",
		"accountNumber": "xxx",
		"balance": 10000,
		"userId": "xxx",
		"createdAt": "2026-04-11T21:32:23.548Z",
		"updatedAt": "2026-04-12T19:39:23.853Z",
		"__v": 0
	}
}
```

Response Body Error : 

```json
{
	"statusCode": 400,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "Invalid account ID"
}
```
```json
{
	"statusCode": 400,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "\"balance\" must be greater than or equal to 0"
}
```
```json
{
	"statusCode": 404,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "account is not found"
}
```
## DELETE Accounts API

Endpoint : DELETE /api/accounts/:id

Response Body Success :

```json
{
	"status": "success",
	"message": "Account deleted",
	"data": {
		"_id": "xxx",
		"accountNumber": "xxx",
		"balance": 10000,
		"userId": "xxx",
		"createdAt": "2026-04-11T21:32:23.548Z",
		"updatedAt": "2026-04-12T19:39:23.853Z",
		"__v": 0
	}
}
```

Response Body Error : 

```json
{
	"statusCode": 400,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "Invalid account ID"
}
```
```json
{
	"statusCode": 404,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "account is not found"
}
```