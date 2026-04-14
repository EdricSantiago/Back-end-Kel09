# Login API Spec

## Post Login API

Endpoint : POST api/login

Contoh Request:
```json
{
  "username": "Diavolo",
  "password": "GioGioAdventure" 
}
```

Response body success:
```json
{
	"status": "success",
	"message": "Login Berhasil",
	"data": {
		"user": {
			"_id": "69de865f0e688ce384af60a7",
			"username": "Diavolo",
			"isFrozen": false,
			"createdAt": "2026-04-14T18:24:31.601Z",
			"updatedAt": "2026-04-14T18:24:31.601Z",
			"__v": 0
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZGU4NjVmMGU2ODhjZTM4NGFmNjBhNyIsInVzZXJuYW1lIjoiRGlhdm9sbyIsImlhdCI6MTc3NjE5MTEwMCwiZXhwIjoxNzc2Mjc3NTAwfQ.kvWtTVxn30XeZwIkKBuaK9k1hG_0s1ErsMZlAXVtL7I"
	}
}

```

Response body fail:
```json
{
	"statusCode": 401,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "Password salah"
}
```

Response body fail 2:
```json
{
	"statusCode": 404,
	"error": "UNKNOWN_ERROR",
	"description": "Unknown error",
	"message": "User tidak ditemukan"
}
```