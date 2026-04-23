# Security API Spec 🔒💅
Note: Semua endpoint di bawah ini WAJIB menyertakan Token JWT yang valid di bagian Header `Authorization: Bearer <token>` .


1. Setup PIN API

Endpoint:`POST /api/security/setup-pin`

Contoh Request Body:
```json
{
  "pin": "123456"
}

Response Body Success:
{
    "status": "success",
    "message": "PIN Berhasil Dibuat."
}

Response Body Error:
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "PIN Harus terdiri Dari 6-digit Angka."
}


## 2. Panic Button (Freeze Account) API 🔪🩸
Endpoint: `PATCH /api/security/panic`


Response Body Success :
```json
{
    "status": "success",
    "message": "Akun Dibekukan, Semua Transaksi Diblokir. Mohon Menghubungi Customer Service Untuk Mengaktifkan Akun Kembali."
}


Response Body Error:
```json
{
    "statusCode": 404,
    "error": "Not Found",
    "message": "User not found!"
}


## 3. Change PIN API
Endpoint: `PUT /api/security/change-pin`

Contoh Request Body:
```json
{
  "oldPin": "123456",
  "newPin": "654321"
}

Response Body Success :
```json
{
    "status": "success",
    "message": "PIN Berhasil Diperbarui"
}

Response Body Error :
```json
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "PIN lama dan baru wajib diisi!"
}

{
    "statusCode": 403,
    "error": "Forbidden",
    "message": "Akun sedang dibekukan. Tidak bisa mengganti PIN."
}

{
    "statusCode": 401,
    "error": "Unauthorized",
    "message": "PIN Lama Salah! Sisa percobaan: 2"
}

{
    "statusCode": 403,
    "error": "Forbidden",
    "message": "PIN Salah 3x, Akun Otomatis Dibekukan."
}

## 4. Get Security Status API
Endpoint: `GET /api/security/status`

Response Body Success :
```json
{
    "status": "success",
    "message": "Status Keamanan Akun Diperoleh",
    "data": {
        "isFrozen": false,
        "hasPinSetup": true,
        "failedAttempts": 0
    }
}


Response Body Error :
```json
{
    "statusCode": 404,
    "error": "Not Found",
    "message": "User tidak ditemukan."
}

## 5. Verify PIN API
Endpoint: `POST /api/security/verify-pin`

Contoh Request Body:
```json
{
  "pin": "123456"
}


Response Body Success:
```json
{
    "status": "success",
    "message": "Autentikasi Berhasil"
}


Response Body Error :
```json
{
    "statusCode": 403,
    "error": "Forbidden",
    "message": "Akun sedang dibekukan."
}

{
    "statusCode": 401,
    "error": "Unauthorized",
    "message": "PIN Salah! Sisa percobaan: 2"
}

{
    "statusCode": 403,
    "error": "Forbidden",
    "message": "Akun Otomatis Dibekukan : 3x salah PIN."
}