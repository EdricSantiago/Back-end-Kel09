# Register API Spec

## Register Login API

Endpoint : POST api/register

Contoh Request:
```json
{
  "username": "Diavolo123",
  "password": "GioGioAdventure",
  "Alamat": "Jl.Italia Spageti No 1",
  "umur": "18",
  "tgl_lahir":"2007-04-02"
}
```

Response body success:
```json
{
	"status": "success",
	"message": "Register berhasil!!",
	"data": {
		"username": "Diavolo123",
		"alamat": "Jl.Italia Spageti No 1",
		"umur": 18,
		"tgl_lahir": "2007-04-02T00:00:00.000Z",
		"pin": null,
		"isFrozen": false,
		"_id": "69e0364b7cbb73ead37e9ba9",
		"createdAt": "2026-04-16T01:07:23.138Z",
		"updatedAt": "2026-04-16T01:07:23.138Z",
		"__v": 0
	}
}

```