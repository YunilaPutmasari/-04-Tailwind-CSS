### Membangun Website Pribadi dengan Next.js (App Router), React, dan Tailwind CSS

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:
node -v 
<img src ='img/1.png'>
npm -v 
<img src ='img/2.png'>
2. Buat direktori baru untuk proyek Next.js Anda:
mkdir website-pribadi 
<img src ='img/3.png'>
cd website-pribadi 
<img src ='img/4.png'>
3. Inisialisasi proyek Next.js dengan TypeScript dan App Router:
npx create-next-app@latest . --typescript –app 
<img src ='img/5.png'>
4. Cek konfigurasi postcss.config.mjs:
<img src ='img/6.png'>
5. Cek di app/globals.css, sudah ada import untuk tailwindcss:
<img src ='img/7.png'>
6. Buka app/layout.tsx, tambahkan import './globals.css', dan modifikasi menjadi sebagai berikut:
<img src ='img/8.png'>
karena terjadi error pada import Layout from "./components/Layout"; maka saya menambahkan folder baru bernama components yang berisi file Layout.tsx:
<img src ='img/9.png'>
7. Jalankan aplikasi Next.js:
npm run dev
Aplikasi akan terbuka di browser pada alamat hƩ p://localhost:3000.
<img src ='img/10.png'>

### Membuat Halaman Website
Website pribadi akan memiliki tiga halaman:
- Tentang Saya: Halaman berisi profil singkat dan link ke media sosial.
- Proyek: Halaman untuk menampilkan proyek-proyek yang telah diselesaikan.
- Esai: Halaman untuk menampilkan daŌ ar arƟ kel yang telah ditulis.

Langkah-langkah:
1. Buat file app/page.tsx sebagai halaman "Tentang Saya":
<img src ='img/11.png'>
2. Buat file app/projects/page.tsx sebagai halaman "Proyek":
<img src ='img/12.png'>
3. Buat file app/essays/page.tsx sebagai halaman "Esai":
<img src ='img/13.png'>
4. Buka browser dan akses:
- http://localhost:3000/ untuk halaman "Tentang Saya".
<img src ='img/14.png'>
- http://localhost:3000/projects untuk halaman "Proyek".
<img src ='img/15.png'>
- http://localhost:3000/essays untuk halaman "Esai".
<img src ='img/16.png'>

### Membuat Layout dan Navigasi
Layout digunakan untuk menyediakan struktur yang konsisten di seluruh halaman, seperti navbar dan footer.
Langkah-langkah:
1. Buat direktori src/components jika belum ada.
2. Buat file src/components/Layout.tsx:
<img src ='img/17.png'>
3. Buat file src/components/Navbar.tsx
<img src ='img/18.png'>
4. Buat file src/components/Footer.tsx
<img src ='img/19.png'>
5. Update file app/layout.tsx untuk menggunakan layout:
<img src ='img/20.png'>
6. Update setiap halaman menambahkan metadata dengan generateMetadata:
<img src ='img/21.png'>

Lakukan hal yang sama untuk halaman projects/page.tsx dan essays/page.tsx.
<img src ='img/22.png'>
<img src ='img/23.png'>
hasil :
<img src ='img/24.png'>
<img src ='img/25.png'>
<img src ='img/26.png'>

###  Membuat Halaman Proyek dengan Grid Responsif
Halaman proyek akan menampilkan daftar proyek dalam bentuk grid yang responsif.
Langkah-langkah:
1. Buat folder di public/images. Kemudian tambahkan dua image, lalu rename dengan nama 
project1.png dan project2.png
2. Modifikasi file app/projects/page.tsx:
Tambahkan import next/image dan beberapa image yang telah ditambahkan sebelumnya
Buat card project item sebagai berikut:
Modifikasi komponen project sebagai berikut:
3. Simpan file dan buka http://localhost:3000/projects di browser. Anda akan melihat daftar proyek dalam grid yang responsif.
<img src ='img/28.png'>
<img src ='img/32.png'>

### Tugas
Eksplorasi Tailwindcss, kemudian.
1. Modifikasi halaman "Esai" dengan Grid daftar artikel yang telah ditulis.
<img src ='img/29.png'>
<img src ='img/33.png'>
<img src ='img/34.png'>
2. Modifikasi halaman “Tentang Saya” Buat tampilan yang menarik 
<img src ='img/27.png'>
<img src ='img/30.png'>
<img src ='img/31.png'>


Kesimpulan Dalam praktikum ini, Anda telah mempelajari cara membangun website pribadi menggunakan Next.js 
(App Router), React, dan Tailwind CSS. Anda juga telah mengimplementasikan fitur-fitur seperti routing, 
layout, serta komponen reusable.
