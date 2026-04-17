# Pinjaman API Spec

## Pinjaman Login API
- Note:Harus memasukkan token authentication yang didapatkan pada saat login untuk melakukan pinjaman dan mendapatkan status pinjaman

Endpoint : POST api/pinjaman

Contoh Request:
```json
{
    "username":"Diavolo",
    "jumlah_pinjaman":2000000,
    "kredit_skor":750
}
```

Response body success:
```json
{
	"status": "success",
	"message": "Pinjaman berhasil diajukan",
	"data": {
		"jumlah_pinjaman": 2000000,
		"userId": "69de865f0e688ce384af60a7",
		"kredit_skor": 750,
		"tenor": 6,
		"status": "approved",
		"tanggal_jatuh_tempo": "2026-10-17T16:17:19.391Z",
		"cicilan_per_bulan": 350000,
		"_id": "69e25d0f7618fdc39b1cb316",
		"tanggal_pengajuan": "2026-04-17T16:17:19.394Z",
		"createdAt": "2026-04-17T16:17:19.397Z",
		"updatedAt": "2026-04-17T16:17:19.397Z",
		"__v": 0
	}
}

```
Endpoint : GET api/pinjaman/status

Response body :
```json
{
	"status": "success",
	"message": "Data pinjaman berhasil diambil",
	"data": [
		{
			"id": "69e25bc3c5c71add416b4da1",
			"jumlah_pinjaman": 10000000,
			"tenor": "12 bulan",
			"bunga": "undefined% per tahun",
			"cicilan_per_bulan": 916667,
			"status": "approved",
			"tanggal_pengajuan": "2026-04-17T16:11:47.139Z",
			"tanggal_jatuh_tempo": "2027-04-17T16:11:47.134Z"
		},
		{
			"id": "69e25bcbc5c71add416b4da2",
			"jumlah_pinjaman": 1000000000,
			"tenor": "36 bulan",
			"bunga": "undefined% per tahun",
			"cicilan_per_bulan": 36111111,
			"status": "approved",
			"tanggal_pengajuan": "2026-04-17T16:11:55.379Z",
			"tanggal_jatuh_tempo": "2029-04-17T16:11:55.379Z"
		},
		{
			"id": "69e25d0f7618fdc39b1cb316",
			"jumlah_pinjaman": 2000000,
			"tenor": "6 bulan",
			"bunga": "undefined% per tahun",
			"cicilan_per_bulan": 350000,
			"status": "approved",
			"tanggal_pengajuan": "2026-04-17T16:17:19.394Z",
			"tanggal_jatuh_tempo": "2026-10-17T16:17:19.391Z"
		}
	]
}

```