# Register API Spec

## Register Login API

Endpoint : POST api/register

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
	"message": "Register berhasil!!",
	"data": {
		"username": "Diavolo",
		"pin": null,
		"isFrozen": false,
		"_id": "69de865f0e688ce384af60a7",
		"createdAt": "2026-04-14T18:24:31.601Z",
		"updatedAt": "2026-04-14T18:24:31.601Z",
		"__v": 0
	}
}


```