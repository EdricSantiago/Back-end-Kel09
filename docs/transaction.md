# Transaction API Spec

> ⚠️ Semua endpoint di bawah membutuhkan **Authorization: Bearer \<token\>** dari hasil login.

---

## Transfer

Endpoint : POST api/transactions/transfer

> ⚠️ Akun yang dibekukan (`isFrozen: true`) tidak dapat melakukan transfer.

Contoh Request:
```json
{
  "senderAccountId": "69de8a1f0e688ce384af60b1",
  "receiverAccountId": "69de8b2f0e688ce384af60c3",
  "amount": 25000
}
```

Response body success:
```json
{
  "status": "success",
  "message": "Transfer berhasil.",
  "data": {
    "type": "transfer",
    "amount": 25000,
    "senderId": "69de8a1f0e688ce384af60b1",
    "receiverId": "69de8b2f0e688ce384af60c3",
    "status": "success",
    "_id": "69e1ab3c7cbb73ead37e9cd1",
    "createdAt": "2026-04-16T10:00:00.000Z",
    "updatedAt": "2026-04-16T10:00:00.000Z",
    "__v": 0
  }
}
```

Response body fail:
```json
{
  "statusCode": 400,
  "error": "UNKNOWN_ERROR",
  "description": "Unknown error",
  "message": "Saldo tidak cukup"
}
```

Response body fail 2:
```json
{
  "statusCode": 403,
  "error": "UNKNOWN_ERROR",
  "description": "Unknown error",
  "message": "Demi Keamanan Anda, Saat Ini Akun Sedang Dibekukan. Mohon Hubungi Customer Service Untuk Ditindaklanjuti."
}
```

---

## Deposit (Setor)

Endpoint : POST api/transactions/deposit

Contoh Request:
```json
{
  "accountId": "69de8a1f0e688ce384af60b1",
  "amount": 100000
}
```

Response body success:
```json
{
  "status": "success",
  "message": "Deposit berhasil.",
  "data": {
    "type": "setor",
    "amount": 100000,
    "senderId": null,
    "receiverId": "69de8a1f0e688ce384af60b1",
    "status": "success",
    "_id": "69e1ac3c7cbb73ead37e9cd2",
    "createdAt": "2026-04-16T10:05:00.000Z",
    "updatedAt": "2026-04-16T10:05:00.000Z",
    "__v": 0
  }
}
```

Response body fail:
```json
{
  "statusCode": 400,
  "error": "UNKNOWN_ERROR",
  "description": "Unknown error",
  "message": "Minimal deposit Rp 100"
}
```

---

## Withdraw (Tarik Tunai)

Endpoint : POST api/transactions/withdraw

> ⚠️ Akun yang dibekukan (`isFrozen: true`) tidak dapat melakukan penarikan.

Contoh Request:
```json
{
  "accountId": "69de8a1f0e688ce384af60b1",
  "amount": 50000
}
```

Response body success:
```json
{
  "status": "success",
  "message": "Penarikan berhasil.",
  "data": {
    "type": "tarik",
    "amount": 50000,
    "senderId": "69de8a1f0e688ce384af60b1",
    "receiverId": null,
    "status": "success",
    "_id": "69e1ad3c7cbb73ead37e9cd3",
    "createdAt": "2026-04-16T10:10:00.000Z",
    "updatedAt": "2026-04-16T10:10:00.000Z",
    "__v": 0
  }
}
```

Response body fail:
```json
{
  "statusCode": 400,
  "error": "UNKNOWN_ERROR",
  "description": "Unknown error",
  "message": "Transaksi ditolak. Saldo rekening tidak boleh kurang dari Rp 50.000 setelah penarikan."
}
```

Response body fail 2:
```json
{
  "statusCode": 403,
  "error": "UNKNOWN_ERROR",
  "description": "Unknown error",
  "message": "Demi Keamanan Anda, Saat Ini Akun Sedang Dibekukan. Mohon Hubungi Customer Service Untuk Ditindaklanjuti."
}
```

---

## Riwayat Transaksi

Endpoint : GET api/transactions/history/:accountId

Contoh Request:

```
GET api/transactions/history/69de8a1f0e688ce384af60b1
```

Response body success:
```json
{
  "status": "success",
  "message": "Riwayat Transaksi",
  "data": [
    {
      "_id": "69e1ad3c7cbb73ead37e9cd3",
      "type": "tarik",
      "amount": 50000,
      "senderId": "69de8a1f0e688ce384af60b1",
      "receiverId": null,
      "status": "success",
      "createdAt": "2026-04-16T10:10:00.000Z",
      "updatedAt": "2026-04-16T10:10:00.000Z"
    },
    {
      "_id": "69e1ac3c7cbb73ead37e9cd2",
      "type": "setor",
      "amount": 100000,
      "senderId": null,
      "receiverId": "69de8a1f0e688ce384af60b1",
      "status": "success",
      "createdAt": "2026-04-16T10:05:00.000Z",
      "updatedAt": "2026-04-16T10:05:00.000Z"
    }
  ]
}
```

Response body fail:
```json
{
  "statusCode": 404,
  "error": "UNKNOWN_ERROR",
  "description": "Unknown error",
  "message": "Akun tidak ditemukan"
}
```
