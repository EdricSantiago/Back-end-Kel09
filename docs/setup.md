# Setup Guide

## Ikuti langkah langkah ini

Pastikan sudah terinstall di komputer kamu:
- [Node.js](https://nodejs.org/) v18 atau lebih baru
- [Git](https://git-scm.com/)
- Akun [MongoDB Atlas](https://www.mongodb.com/atlas) (untuk database)

---

## Instalasi

**1. Clone repository**
```bash
git clone https://github.com/EdricSantiago/Back-end-Kel09.git
cd Back-end-Kel09
```

**2. Install dependencies**
```bash
npm install
```

**3. Buat file `.env`**

Buat file `.env` di root project, lalu isi dengan:
```
PORT=3100
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<nama_database>
JWT_SECRET=isi_dengan_random_string_rahasia
```

Untuk generate `JWT_SECRET` yang aman, jalankan perintah ini di terminal:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Menjalankan Server

**Mode development** (auto-restart saat ada perubahan file):
```bash
npm run dev
```

**Mode production:**
```bash
npm start
```

Server berjalan di `http://localhost:3100`

---

## Testing API

Gunakan [EchoAPI](https://marketplace.visualstudio.com/items?itemName=EchoAPI.EchoAPI) (extension VS Code) atau yang lain untuk mencoba endpoint.

Urutan testing yang disarankan:
1. Register akun → `POST /api/auth/register`
2. Login → `POST /api/auth/login` — simpan token yang keluar
3. Gunakan token di header setiap request selanjutnya:
   ```
   Authorization: Bearer <token>
   ```

Lihat folder `docs/` untuk dokumentasi lengkap setiap endpoint.

---

## Dependensi Utama

| Package | Fungsi |
|---|---|
| Express | Framework HTTP |
| Mongoose | Koneksi & model MongoDB |
| bcrypt | Hash password |
| jsonwebtoken | Autentikasi JWT |
| dotenv | Konfigurasi environment |
| morgan | Logger HTTP request |
| joi | Validasi input |
| nodemon | Auto-restart (development) |