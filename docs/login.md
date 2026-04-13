# Login API Spec

## Post Login API

Endpoint : POST api/login

Contoh Request:
```json
{
  "username": "Louis Vebryanto",
  "password": "GioGioAdventure" 
}
```

Response body success:
```json
{
	"message": "Login berhasil",
	"user": {
		"_id": "69dd04b7aad959503409866a",
		"username": "Louis Vebryanto",
		"__v": 0
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZGQwNGI3YWFkOTU5NTAzNDA5ODY2YSIsInVzZXJuYW1lIjoiTG91aXMgVmVicnlhbnRvIiwiaWF0IjoxNzc2MDkyMzU5LCJleHAiOjE3NzYxNzg3NTl9.m9EsOCUBxbYPRs79s5xgoKCKi1j_YkUjXic01hC_Bq4"
}


```

Response body fail:
```json
{
	"statusCode": 401,
	"error": "UNAUTHORIZED",
	"message": "Akses ditolak. Silahkan login terlebih dahulu."
}
```