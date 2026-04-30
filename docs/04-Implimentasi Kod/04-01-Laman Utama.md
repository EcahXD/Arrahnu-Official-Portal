# 04-01 Laman Utama

## 1. Pengenalan

Laman Utama merupakan halaman pertama yang dipaparkan kepada pengguna apabila melayari Portal Ar-Rahnu Prihatin. Halaman ini dibangunkan sebagai medium utama untuk memperkenalkan syarikat, menjelaskan kelebihan perkhidmatan yang ditawarkan, serta menjadi pintu masuk kepada halaman-halaman lain dalam portal.

Bagi memastikan imej profesional dan keyakinan pengguna dapat dibina sejak awal, pembangunan halaman ini memberi fokus kepada reka bentuk moden, identiti korporat, susun atur kandungan yang jelas, serta pengalaman pengguna yang mesra dan responsif.

Portal ini dibangunkan sebagai **laman web statik (static website)** menggunakan gabungan teknologi **HTML5**, **CSS3**, dan fungsi JavaScript asal daripada template **Solid State by HTML5 UP**.

---

## 2. Objektif Pembangunan

Objektif pembangunan Laman Utama adalah seperti berikut:

1. Menjadi halaman rasmi pengenalan syarikat.
2. Menonjolkan imej korporat yang profesional dan diyakini.
3. Menjelaskan kelebihan utama Ar-Rahnu Prihatin.
4. Menyediakan navigasi ke halaman lain.
5. Menampilkan reka bentuk moden dan responsif.
6. Meningkatkan keyakinan pengguna terhadap perkhidmatan syarikat.

---

## 3. Struktur Fail Digunakan

```text
index.html
assets/css/main.css
assets/css/noscript.css
assets/js/main.js
images/
````

Keterangan:

* `index.html` → Halaman utama portal.
* `main.css` → Fail gaya utama yang diubah suai.
* `images/` → Logo dan imej digunakan dalam portal.

---

## 4. Pembangunan Struktur HTML

### 4.1 Bahagian Head (Browser Tab & Metadata)

Bahagian `<head>` digunakan untuk menetapkan nama portal pada tab browser, favicon logo rasmi, tetapan responsif dan sambungan fail CSS.

Kod:

```html
<title>Ar-rahnu Prihatin Pandu Lalu Melaka</title>
<link rel="icon" type="image/png" href="images/logo.jpeg">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Fungsi:

* Menukar nama tab browser.
* Menukar icon browser kepada logo syarikat.
* Menjadikan laman sesuai di telefon dan desktop.

#### Paparan Browser Tab

![Browser Tab](portaldemoimages/browser.png)

---

### 4.2 Header dan Navigasi

Header digunakan sebagai menu utama portal.

Kod:

```html
<header id="header" class="alt">
    <h1><a href="index.html">Arrahnu Prihatin</a></h1>
</header>
```

#### Paparan Header

![Header](portaldemoimages/header.png)


Navigasi sisi:

```html
<nav id="menu">
    ...<h2>Halaman Lain</h2>
        <ul class="links">
            <li><a href="index.html">Laman Utama</a></li>
            <li><a href="generic.html">Perkhidmatan</a></li>
            <li><a href="elements.html">Mengenai Kami</a></li>
            <li><a href="#">Harga & Anggaran</a></li>
            <li><a href="#">Hubungi Kami</a></li>
        </ul> ...
```

Menu diubah nama kepada "Halaman Lain" dan mengandungi:

* Laman Utama
* Perkhidmatan
* Mengenai Kami
* Harga & Anggaran
* Hubungi Kami

#### Paparan Menu

![Menu](portaldemoimages/menu.png)

---

### 4.3 Hero Banner Utama

Hero Banner ialah bahagian pertama yang menarik perhatian pengguna.

Kod:

```html
<section id="banner">
```

Logo rasmi diletakkan menggantikan icon asal template.

Kod:

```html
<img src="images/logo.jpeg" class="custom-logo">
```

Teks utama dan subtext:

```html
<h2>Ar-rahnu Prihatin: Solusi Tunai Segera & Patuh Syariah</h2>
<p>Tukarkan Emas Anda Kepada Tunai Dengan Margin Pembiayaan Tertinggi.</p>
```

#### Paparan Banner

![Banner](portaldemoimages/banner.png)

---

### 4.4 Seksyen Kelebihan Utama (Feature Cards)

Bahagian ini menerangkan sebab pelanggan memilih Ar-Rahnu Prihatin.

Kod struktur:

```html
<section id="wrapper">
```

Empat kad utama dibina:

1. Margin Pembiayaan Tinggi
2. Penilaian Pakar & Teliti
3. Jaminan Keselamatan 24 Jam
4. Pembiayaan Tanpa Riba

Setiap kad mempunyai:

* Imej ilustrasi AI
* Tajuk
* Penerangan ringkas

#### Paparan Feature Cards

![Cards](portaldemoimages/card.png)

---

### 4.5 Seksyen Spotlight Maklumat

Empat seksyen tambahan dibina menggunakan komponen spotlight template.

Kod:

```html
<section id="one" class="wrapper spotlight style1">...</section>
<section id="two" class="wrapper alt spotlight style2">...</section>
<section id="one" class="wrapper spotlight style1">...</section>
<section id="two" class="wrapper alt spotlight style2">...</section>
```

Bahagian yang dibina:

#### Perkhidmatan

Menerangkan servis pembiayaan tunai segera.

![Spotlight Section](portaldemoimages/spotlight1.png)


#### Mengenai Kami

Penerangan syarikat dan nilai korporat.

![Spotlight Section](portaldemoimages/spotlight2.png)


#### Harga Emas & Rundingan

Maklumat harga emas dan nilai pinjaman.

![Spotlight Section](portaldemoimages/spotlight3.png)


#### Hubungi Kami

Maklumat hubungan dan servis pelanggan.

![Spotlight Section](portaldemoimages/spotlight4.png)

---

### 4.6 Footer Portal

Footer dibangunkan bagi meletakkan maklumat rasmi syarikat.

Maklumat dimasukkan:

* Nama syarikat
* Lokasi penuh
* Nombor telefon
* Waktu operasi
* Facebook
* TikTok
* Kredit pembangun
* Logo syarikat

Kod:

```html
<section id="footer">...</section>
```

#### Paparan Footer

![Footer](portaldemoimages/footer.png)

---

## 5. Pengubahsuaian CSS


### 5.1 Penyesuaian Logo Banner

Kod:

```css
.custom-logo {
    height: 4em;
    width: auto;
}
```

Versi telefon:

```css
@media screen and (max-width: 480px)
```

Fungsi:

* Menyesuaikan saiz logo desktop.
* Mengecilkan logo di telefon.

---

### 5.2 Tema Warna Korporat

Warna asal template ditukar kepada identiti syarikat:

* Maroon
* Gold
* Dark Gold

Kod:

```css
background-image:
linear-gradient(45deg,#2a2209 0%, #8B0000 50%, #D4AF37 100%);
```

Fungsi:

* Menampilkan imej premium.
* Selari dengan identiti emas dan kewangan.

---

### 5.3 Glitter Animation

Kesan glitter ditambah bagi menyerlahkan elemen premium.

Kod:

```css
body::before {
    ...
    background-image: 
        radial-gradient(2px 2px at 40px 60px, #D4AF37 50%, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 90px 40px, #ffffff 50%, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 150px 120px, #cda72a 50%, rgba(0,0,0,0)),
        radial-gradient(1.5px 1.5px at 30px 160px, #F1C40F 50%, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 180px 190px, #ffffff 50%, rgba(0,0,0,0)),
        radial-gradient(2.5px 2.5px at 110px 220px, #D4AF37 50%, rgba(0,0,0,0));
    ...
    -webkit-mask-image: linear-gradient(to top, black 0%, black 60%, transparent 80%);
    mask-image: linear-gradient(to top, black 0%, black 60%, transparent 80%);
    animation: glitterMove 15s linear infinite;
}
```

Menggunakan:

* `radial-gradient`
* `animation`
* `mask-image`

Fungsi:

* Menjadikan background lebih hidup.
* Memberi efek glitter lebih elegan.

---

### 5.4 Kad Maklumat Premium

Kad diubah menggunakan gradient dan border emas.

Kod:

```css
.features article {
    padding: 1.75em 1.75em 0.1em 1.75em;
    background-color: #2a2209; /* Warna asas gelap */
    background-image: 
        linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%),
        linear-gradient(to top, #2a2209 0%, #cda72a 100%);
    ...
    border: 1px solid rgba(212, 175, 55, 0.3); 
}
```

Penambahbaikan:

* Border emas
* Background gradient
* Glitter overlay
* Layout dua kolum

---

### 5.5 Gambar Bulat Spotlight

Kod:

```css
.wrapper.spotlight .image {
    border-radius: 50%;
    aspect-ratio: 1/1;
}
```

Fungsi:

* Menjadikan imej lebih kemas.
* Konsisten pada semua seksyen.

---

### 5.6 Responsive Layout

Media query digunakan bagi memastikan portal sesuai untuk:

* Desktop
* Laptop
* Tablet
* Telefon pintar

#### Paparan Dekstop, Mobile, dan Tablet

![Dekstop View](portaldemoimages/dekstop.png)
![Mobile View](portaldemoimages/mobile.png)
![Tab View](portaldemoimages/tab.png)

---

## 6. Ujian Sistem

Beberapa ujian asas telah dijalankan ke atas halaman utama bagi memastikan paparan, navigasi dan keserasian berfungsi dengan baik.

| No | Jenis Ujian | Hasil |
|----|------------|------|
| 1 | Nama tab browser & favicon dipaparkan | Berjaya |
| 2 | Menu navigasi desktop berfungsi | Berjaya |
| 3 | Menu sisi versi mobile dipaparkan | Berjaya |
| 4 | Banner utama dipaparkan sempurna | Berjaya |
| 5 | Kad maklumat tersusun kemas | Berjaya |
| 6 | Footer memaparkan info syarikat | Berjaya |
| 7 | Paparan telefon responsif | Berjaya |
| 8 | Paparan desktop stabil | Berjaya |

## 7. Masalah dan Penyelesaian

### Isu 1: Logo Tidak Sesuai Dalam Banner

**Penyelesaian:**
Menambah class `.custom-logo` dan kawalan saiz manual.

### Isu 2: Gambar Spotlight Lonjong

**Penyelesaian:**
Menggunakan:

```css
aspect-ratio: 1/1;
object-fit: cover;
```

### Isu 3: Tema Template Tidak Sesuai

**Penyelesaian:**
Menukar keseluruhan skema warna kepada maroon dan gold.

### Isu 4: Footer Kurang Menarik

**Penyelesaian:**
Membina footer custom dengan icon sosial media dan logo syarikat.

---

## 8. Rumusan

Secara keseluruhannya, pembangunan Laman Utama Portal Ar-Rahnu Prihatin berjaya dilaksanakan dengan baik melalui proses penyesuaian template Solid State kepada identiti korporat syarikat.

Halaman ini kini mempunyai:

* Identiti rasmi syarikat
* Rekaan moden dan premium
* Kandungan yang jelas
* Navigasi mudah
* Responsif untuk semua peranti

Laman Utama ini menjadi asas utama kepada pembangunan halaman seterusnya seperti Perkhidmatan, Mengenai Kami, Harga & Anggaran dan Hubungi Kami.

