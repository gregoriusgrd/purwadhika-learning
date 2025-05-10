// command untuk menjalankan quokka
// (CTRL + K) + Q
// (CTRL + SHIFT + P) start on current file

// console ini mengacu pada terminal
// log digunakan untuk menampilkan sebuah info
// hello world adalah text yang akan ditampilkan
console.log("Hello World");

// variable
// sebuah storage untuk menampung data

// penamaan variable
// 1. hanya boleh mengandung karakter, angka, atau simbol $ dan _
// 2. karakter pertama tidak boleh sebuah angka
// 3. variable case sensitive
// 4. variable tidak bisa menggunakan reserved word
// 5. jika nama variable lebih dari 2 kata,
//  -  bisa menggunakan pascal case (JenisKelamin),
//  -  bisa menggunakan snake case (jenisKelamin),
//  -  bisa menggunakan underscore (jenis_kelamin)

// deklarasi variable dengan const
// const atau constant adalah sebuah variable yang valuenya tidak bisa dirubah lagi
// bisa digunakan untuk rumus atau value yang memang tidak bisa dirubah lagi
const nama = "purwadhika"; // ddeklarasi
console.log(nama);

const umur = 24;
console.log(umur);

// deklarasi variable dengan let
// let digunakan jika valuenya dapat berubah-rubah
let alamat = "jl. jalanan";
console.log(alamat);

alamat = "jl. kedua";
console.log(alamat);

// deklarasi variable dengan var
var kelas = 21;
console.log(kelas);

// tipe data

// string atau text
const _string = "1";
console.log(typeof _string);

// number
const _number = 1;
console.log(typeof _number);

// boolean
const _bool = false;
console.log(typeof _bool);

// date
const _date = new Date();
console.log(_date);

// NULL
// value yang sengaja tidak diisi
const _null = null;
console.log(_null);

// UNDEFINED
// value yang tidak ada isinya
let _undefined;
console.log(_undefined);

// diatas adalah primitive tipe data

// concat atau penggabungan string
const deskripsi = "Hello, " + nama + ", umur kamu " + umur;
console.log(deskripsi);

console.log(1 + 1 + "1" + 5);
let $number = 5;
$number = "15";
console.log($number);

// template literal
const _deskripsi = `Halo ${nama}, umur anda adalah ${umur}`;
console.log(_deskripsi);

// build in method
console.log(_deskripsi.toUpperCase());
console.log("Hello World".toLowerCase());
console.log("AIUEO".replace("A", "*"));
console.log(" test@gmail.com".trim());

// number build in method
const angka = 5.15;
console.log(angka.toString());
console.log(
  angka.toLocaleString("in-Id", {
    style: "currency",
    currency: "IDR",
  })
);

// global build in method
console.log(parseInt(angka));
console.log(Number(angka));

// date build in method
let tanggal = new Date();
console.log(tanggal);
console.log(tanggal.getDate());
console.log(tanggal.getMonth() + 1);
console.log(tanggal.getFullYear());
console.log(tanggal.toLocaleString("in-ID", { timeZone: "Asia/Jakarta" }));

// math
console.log(5 + 5); // operator + atau penambahan
console.log(5 - 5); // operator - atau pengurangan
console.log(5 * 5); // operator * atau perkalian
console.log(5 / 5); // operator / atau pembagian
console.log(5 % 5); // operator % atau modulo atau sisa hasil pembagian
console.log(5 ** 2); // operator ** atau pangkat

// modify in place
let x = 5;
x += 5; // x = x + 5

let pesan = "hello";
pesan += " world";
console.log(pesan);

console.log(x);
x -= 2; // x = x - 2
console.log(x);

// increment & decrement
let y = 1;
y++; // y = y + 1
console.log(y);

y--; // y = y - 1
console.log(y);

// postfix + disebelah kanan
// postfix menampilkan dulu baru di lakukan operasi penambahan atau pengurangan
console.log(y);
console.log(y++);
console.log(y);

// prefix
// prefix ditambahkan atau dikurangkan dulu baru di tampilkan
console.log(y);
console.log(--y);

// pseudocode
// step by step instruction untuk memecahkan sebuah masalah dalam bahasa awam

// problem:
// tulis code untuk mencari area dari persegi panjang

// hint:
// 1. rumus area persegi panjang = panjang x lebar

// solusi:
// 1. buat variable untuk menampung panjang persegi panjang, CTH: const panjang = 5
// 2. buat variable untuk menampung lebar persegi panjang, CTH: const lebar = 5
// 3. buat variable untuk menampung rumus persegi panjang, const area = panjang * lebar
// 4. tampilkan variable yang menampung rumus persegi panjang dengan console.log
