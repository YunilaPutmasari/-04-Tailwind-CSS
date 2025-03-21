### Membangun Website Pribadi dengan Next.js (App Router), React, dan Tailwind CSS

1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. Anda dapat memeriksanya dengan menjalankan perintah berikut di terminal atau command prompt:
node -v 
<img src ='img/1.png'>
npm -v 
<img src ='img/2.png'>
2. Buat direktori baru untuk proyek Next.js Anda:
mkdir website-pribadi 
cd website-pribadi 
3. Inisialisasi proyek Next.js dengan TypeScript dan App Router:
npx create-next-app@latest . --typescript –app 
4. Cek konfigurasi postcss.config.mjs:
5. Cek di app/globals.css, sudah ada import untuk tailwindcss:
6. Buka app/layout.tsx, tambahkan import './globals.css', dan modifikasi menjadi sebagai berikut:
7. Jalankan aplikasi Next.js:
npm run dev
Aplikasi akan terbuka di browser pada alamat hƩ p://localhost:3000.