# 04-01 Laman Utama

## Pengenalan

Laman Utama merupakan halaman pertama yang akan dipaparkan kepada pengguna apabila melayari Portal Ar-Rahnu Prihatin. Halaman ini dibangunkan sebagai medium utama bagi memperkenalkan syarikat, menjelaskan kelebihan perkhidmatan yang ditawarkan, serta menyediakan navigasi awal kepada halaman-halaman lain dalam portal. Oleh kerana Laman Utama berfungsi sebagai pintu masuk utama kepada pengguna, reka bentuk halaman ini diberi perhatian khusus dari segi susun atur, identiti visual, kemudahan navigasi dan daya tarikan antaramuka.

Pembangunan Laman Utama dilaksanakan menggunakan bahasa **HTML5**, **CSS3**, dan sedikit penggunaan **JavaScript** melalui fungsi asal template Solid State. Struktur asas halaman diubah suai mengikut keperluan syarikat bagi menyesuaikan kandungan dengan identiti Ar-Rahnu Prihatin.

---

## Objektif Pembangunan Laman Utama

Antara objektif utama pembangunan halaman ini adalah:

1. Menjadi halaman pengenalan rasmi syarikat kepada pengguna.
2. Menampilkan imej korporat yang profesional dan dipercayai.
3. Menyediakan akses pantas ke halaman lain seperti Perkhidmatan, Mengenai Kami, Harga & Anggaran dan Hubungi Kami.
4. Menjelaskan kelebihan utama Ar-Rahnu Prihatin kepada pelanggan baharu.
5. Menarik minat pengguna melalui reka bentuk moden dan responsif.

---

## Struktur Kod HTML

Laman Utama dibangunkan menggunakan struktur HTML yang tersusun dan dibahagikan kepada beberapa komponen utama seperti berikut:

1. `<head>` – Mengandungi tajuk halaman, metadata, fail CSS dan favicon.
2. `<header>` – Bahagian menu atas laman web.
3. `<nav id="menu">` – Menu navigasi sisi untuk paparan mudah alih.
4. `<section id="banner">` – Bahagian utama (hero section).
5. `<section id="wrapper">` – Kandungan utama laman.
6. `<section id="footer">` – Bahagian kaki laman yang mengandungi maklumat syarikat.
7. Fail JavaScript – Digunakan untuk menu interaktif dan animasi template.

---

## Penyesuaian Identiti Laman

Pada bahagian `<head>`, tajuk laman telah ditukar daripada tajuk asal template kepada nama rasmi syarikat seperti berikut:

```html
<title>Ar-rahnu Prihatin Pandu Lalu Melaka</title>
````

Selain itu, favicon laman turut ditukar kepada logo rasmi syarikat menggunakan kod berikut:

```html
<link rel="icon" type="image/png" href="images/logo.jpeg">
```

Perubahan ini membolehkan nama dan logo syarikat dipaparkan pada tab pelayar pengguna.

---

## Header dan Menu Navigasi

Bahagian header digunakan sebagai menu utama laman web. Nama syarikat diletakkan pada bahagian kiri manakala butang “Halaman Lain” disediakan pada bahagian kanan.

Menu navigasi mengandungi lima pautan utama iaitu:

1. Laman Utama
2. Perkhidmatan
3. Mengenai Kami
4. Harga & Anggaran
5. Hubungi Kami

Struktur ini memudahkan pengguna berpindah ke halaman lain dengan cepat.

---

## Banner Utama (Hero Section)

Bahagian banner dibangunkan sebagai fokus utama apabila pengguna mula memasuki laman web. Dalam bahagian ini, logo rasmi syarikat digunakan menggantikan ikon asal template.

Kod berikut digunakan:

```html
<div class="logo-container">
    <img src="images/logo.jpeg" alt="Ar-Rahnu Prihatin" class="custom-logo">
</div>
```

Tajuk utama yang digunakan ialah:

**Ar-Rahnu Prihatin: Solusi Tunai Segera & Patuh Syariah**

Manakala slogan sokongan ialah:

**Tukarkan Emas Anda Kepada Tunai Dengan Margin Pembiayaan Tertinggi.**

Bahagian ini penting kerana memberikan kesan pertama yang profesional kepada pengguna.

---

## Seksyen Kelebihan Utama (Feature Cards)

Selepas banner utama, bahagian kad maklumat dibina bagi menjelaskan kelebihan utama syarikat. Seksyen ini diberi tajuk:

**Kenapa Ar-Rahnu Prihatin?**

Empat kad utama dibangunkan iaitu:

1. Margin Pembiayaan Tinggi
2. Penilaian Pakar & Teliti
3. Jaminan Keselamatan 24 Jam
4. Pembiayaan Tanpa Riba

Setiap kad mengandungi imej ilustrasi yang dijana menggunakan AI dan penerangan ringkas bagi membantu pengguna memahami manfaat perkhidmatan.

---

## Seksyen Maklumat Navigasi

Empat seksyen tambahan dibangunkan bagi menghubungkan pengguna ke halaman utama lain:

1. Perkhidmatan
2. Mengenai Kami
3. Harga Emas & Rundingan
4. Hubungi Kami

Setiap seksyen mengandungi:

* Imej berkaitan
* Tajuk modul
* Penerangan ringkas
* Butang pautan ke halaman berkaitan

Pendekatan ini membantu pengguna memahami kandungan portal sebelum meneroka halaman lain.

---

## Footer Portal

Bahagian footer dibangunkan bagi melengkapkan struktur laman web dan memaparkan maklumat penting syarikat.

Maklumat yang dimasukkan adalah:

1. Nama cawangan
2. Alamat penuh
3. Talian bantuan
4. Nombor telefon
5. Waktu operasi
6. Pautan Facebook dan TikTok
7. Kredit reka bentuk dan pembangun sistem

Logo syarikat turut diletakkan pada bahagian kanan footer bagi mengekalkan identiti jenama.

---

## Pengubahsuaian CSS

Beberapa pengubahsuaian CSS telah dilakukan bagi menyesuaikan template asal dengan identiti Ar-Rahnu Prihatin.

### 1. Penyesuaian Logo Banner

Kod berikut digunakan untuk mengawal saiz logo:

```css
.custom-logo {
    height: 4em;
    width: auto;
}
```

Versi mudah alih turut disediakan:

```css
@media screen and (max-width: 480px) {
    .custom-logo {
        height: 2.5em;
    }
}
```

### 2. Skema Warna Latar Belakang

Tema warna ditukar kepada gabungan:

* Maroon
* Dark Gold
* Gold

Menggunakan kod gradient seperti berikut:

```css
background-image:
linear-gradient(45deg, #2a2209 0%, #8B0000 50%, #D4AF37 100%);
```

### 3. Efek Glitter Animation

Kesan glitter dibina menggunakan pseudo-element `::before` dan animasi CSS bagi menghasilkan suasana premium serta menyerlahkan elemen emas.

### 4. Kad Maklumat

Kad maklumat diberikan:

* Gradient emas gelap
* Border emas
* Animasi glitter
* Layout responsif dua kolum

### 5. Imej Spotlight Bulat

Imej bagi seksyen spotlight ditukar menjadi bentuk bulat menggunakan:

```css
border-radius: 50%;
object-fit: cover;
```

---

## Reka Bentuk Responsif

Laman Utama dibangunkan secara responsif supaya sesuai dipaparkan pada:

1. Komputer desktop
2. Komputer riba
3. Tablet
4. Telefon pintar

Saiz logo, susun atur kandungan dan elemen navigasi akan berubah secara automatik mengikut saiz skrin pengguna.

---

## Kelebihan Implementasi

Antara kelebihan hasil pembangunan Laman Utama ini ialah:

1. Menampilkan identiti korporat yang lebih kukuh.
2. Meningkatkan kepercayaan pengguna terhadap syarikat.
3. Memudahkan pelanggan mendapatkan maklumat awal.
4. Menyediakan navigasi yang jelas dan mesra pengguna.
5. Mempunyai reka bentuk moden serta premium.

---

## Kesimpulan

Secara keseluruhannya, pembangunan Laman Utama Portal Ar-Rahnu Prihatin berjaya dilaksanakan dengan mengubah suai template Solid State kepada sebuah portal korporat yang menepati kehendak syarikat. Penyesuaian kandungan, identiti visual, struktur navigasi serta pengubahsuaian CSS telah berjaya menghasilkan halaman utama yang profesional, menarik dan responsif.

Laman Utama ini menjadi asas penting kepada pembangunan halaman-halaman lain dalam portal dan berfungsi sebagai medium rasmi pertama yang akan dilihat oleh pengguna.

```
```
