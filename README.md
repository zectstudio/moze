<p align="center">
<img height="48" src="docs/img/moze.svg">
<br> Tema Portofolio untuk Hugo
<br>
<a href="https://mozegram.raniaamina.id">Demo</a> |
<a href="https://github.com/zectstudio/moze/archive/master.zip">Unduh</a>
<br>
</p>

* * *
<p align="center"> 
<img src=docs/img/screenshot.png>
</p>

#### Deskripsi 
**Moze!** merupakan tema yang didedikasikan untuk para desainer yang ingin membuat halaman portofolionya sendiri. Tema ini mengusung konsep minim kata sebagaimana yang termanifestasikan pada kalimat di bagian headernya, "Inilah Ruangan itu, ruang ketika kata tak lagi menjadi yang utama untuk dipahami."

Tema ini mendukung portofolio berupa gambar dan video, untuk penggunaannya silakan lihat di bawah. Satu hal yang membuat tema ini menyenagkan adalah Anda tak lagi perlu pusing untuk menyeragamkan ukuran gambar Anda untuk sekedar agar terlihat apik di halaman portofolio. Unggah gambar dengan rasio apapun, dan biarkan Moze! mengaturnya secara otomatis untuk Anda.

#### Pemasangan
Silakan unduh tema Moze melalui tautan pada bagian atas dokumentasi ini atau silakan tambahkan tema ini ke dalam proyek Hugo Anda dengan menjalankan perintah berikut pada direktori utama.

```bash
git submodule add https://github.com/zectstudio/moze.git themes/moze
````

Setelah clone submodul berhasil, silakan jalankan perintah berikut.

```bash
cd themes/moze
npm i
npm run gulp
cd ...
```

#### Pengaturan Dasar
Contoh pengaturan ini saya terapkan pada jenis pengaturan yaml, bila Anda menggunakan jenis toml, silakan untuk menyesuaikan sintaknya.

Silakan buka terlebih dahulu berkas config.yaml pada direktori utama proyek hugo, kemduian lengkapi isian berikut
```bash
baseURL: "[Alamat situs Anda, misal https://raniaamina.id]"
languageCode: "en-us"
metaDataFormat: "yaml"
contentDir: "content"
layoutDir: "layouts"
publishDir: "public"
title: "[Judul Situs Anda]"
disableKinds: ["taxonomy", "taxonomyTerm"]
theme: "moze"
params:
  description: "[Deskripsi Situs]"
  portfolios:
    filter: [Tentukan menu filter, misal: "Makanan","Minuman"]
  menu:
    beranda:
      title: "Beranda"
      link: "/"
# Anda dapat menambah link yang akan muncul pada menu dengan mengikuti format di atas
  socmed:
#    telegram: "id-telegram tanpa @"
#    twitter: "id-twitter tanpa @"
#    instagram: "id instagram tanpa @"
#    linkedin: "id linkedin"
    email: "alamat surel Anda"
# Hilangkan tanda pagar pada bagian depan baris
```
#### Membuat Pos 
- Membuat pos gambar tunggal
```bash
hugo new --kind img nama-postingan.md "judul postingan"
```
Silakan untuk mengubah ID default yang dibuat oleh sistem. Harap diperhatikan, untuk mendapat hasil maksimal pastikan setiap ID memiliki nama yang berbeda. 

- Membuat pos Video
```bash
hugo new --kind video nama-postingan.md "judul postingan"
```
Sama seperti sebelumnya, pastikan untuk mengubah ID masing-masing item dan khusus untuk video, siapkan juga gambar untuk dijadikan thumbnail pada postingan.

- Membuat Pos Multikonten
Multikonten merupakan pos yang berisi lebih dari satu karya, bisa berupa beberapa gambar, beberapa video, atau campuran berupa gambar & video. Perhatikan masing-masing perintah berikut ini
```bash
# Pos Beberapa gambar
hugo new --kind multi-img nama-postingan.md "judul postingan"

# Pos Beberapa Video
hugo new --kind multi-video nama-postingan.md "judul postingan"

# Pos Gambar & Video
hugo new --kind mixed nama-postingan.md "judul postingan"
```

#### Fitur-Fitur
Moze! didesain sedemikian rupa untuk agar mudah dikelola dan nyaman dinikmati oleh siapapun. Berikut merupakan beberapa daftar fitur yang secara baku aktif pada tema Moze! 
- [Isolde Layout](https://github.com/TristanBlg/Isolde) - *A javascript plugin to filter elements from a "masonry" grid*
- [Lightgallery](http://sachinchoolur.github.io/lightGallery/) - L*ightgallery is a lightweight modular responsive jquery light box gallery, which allows you to create beautiful image & video galleries.*
- Berbagi ke Twitter, Facebook, dan Pinterest
- Layout yang responsif (dukungan untuk layar 2K+)
  
  Moze! didesain agar karya Anda dapat dinikmati melalui banyak perangkat. 
<p align="center"> 
<img src=docs/img/responsif.png>
</p>
- Laman teroptimasi
 
 Semaksimal mungkin kami telah menyusun tema ini agar tak hanya cantik dilihat namun juga memiliki performa yang baik dan ringan. Berikut merupakan hasil audit yang membuktikan kesungguhan tersebut.
 <p align="center"> 
<img src=docs/img/optimized.png>
</p>

#### Tiket untuk Dikerjakan
Berikut merupakan beberapa *todo list* yang kemungkinan akan kami kerjakan untuk meningkatkan pengalaman dan performa Moze!
- Aktivasi Multikategori pada postingan
- Warna tema yang terkustomisasi
- Pembatasan karya yang ditampilkan saat pertama kali memuat laman

#### Perkakas Pengembangan
Moze! dibangun dengan menggunakan beberapa perkakas ini
- Bootstap Studio
- hugo
- npm

Silakan merujuk ke dokumentasi masing-masing perkakas untuk melihat implementasinya pada Moze!

#### Kreator
- [Artemtech](http://github.com/artemtech)
- [Rania Amina](http://raniaamina.id)

#### Lisensi
Moze! dilisensikan di bawah lisensi MIT. Silakan merujuk ke berkas [LICENSE](LICENSE) untuk melihat detailnya.

#### Berkontribusi
Suka dengan tema Moze! ini? Silakan ikut berkontribusi dengan membuat ulasan di situs Anda, memperbaiki kesalahan pada kode sumber, atau sekadar mebelikan kopi untuk kreator tema :")
