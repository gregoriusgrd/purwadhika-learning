// COMPARISON OPERATORS

// EQUAL TO (HANYA MENGECEK VALUE TANPA MENGECEK TIPE DATANYA)

console.log(1 == 1);

// STRICT TO EQUAL TO (MENGECEK TIPE DATA DAN VALUE)

console.log("Hello" === "hello");

// EQUAL TO (HANYA MENGECEK VALUE TANPA MENGECEK TIPE DATANYA)

console.log(1 != 2);

// STRICT NOT EQUAL (MENGECEK TIPE DATA DAN VALUE)

console.log(1 !== "1");

// GREATER THAN

console.log(1 > 1);

// LESS THAN

console.log(1 < 3);

// GREATER THAN OR EQUAL TO

console.log(1 >= 1);

// LESS THAN OR EQUAL TO

console.log(1 <= 1);

// IF STATEMENT
// BLOCK OF CODE JALAN JIKA KONDISI TRUE
let nilai = 40;
if (nilai < 75) {
  // BLOCK OF CODE
  console.log("nilai kurang");
}

// ELSE STATEMENT
if (nilai >= 80) {
  //  BLOCK OF CODE
  console.log("nilai mencukupi");
} else {
  console.log("nilai kurang");
}

// ELSE IF STATEMENT
// && OPERATOR (AND) * SEMUA KONDISI HARUS TERPENUHI
// || OPERATOR (OR) * SETIDAKNYA ADA 1 OPERATOR YANG HARUS TERPENUHI
const umur = 26;
if (umur >= 17 && umur < 25) {
  console.log("bisa buat ktp");
} else if (umur >= 25) {
  console.log("sudah punya ktp");
} else {
  console.log("tidak bisa buat ktp");
}

// CHAINING CONDITION
nilai = "D";

if (nilai === "A") {
  console.log("Nilai bagus");
} else if (nilai === "B") {
  console.log("Nilai Oke");
} else if (nilai === "C") {
  console.log("Nilai cukup");
} else {
  console.log("Nilai kurang");
}

// SWITCH CASE
const soda = "pepsi";

switch (soda) {
  case "fanta":
    console.log("harga fanta 10000");
    break;
  case "coca-cola":
    console.log("harga coca-cola 8000");
    break;
  case "pepsi":
    console.log("harga pepsi 9000");
    break;
  default:
    console.log("soda kosong");
}

// TRUTHY AND FALSY VALUE

// TRUTHY
console.log(Boolean(" "));
if (" ") {
  console.log(true);
}

console.log(Boolean([]));
if ([]) {
  console.log(true);
}

console.log(Boolean({}));
if ({}) {
  console.log(true);
}

console.log(Boolean(1));
if (1) {
  console.log(true);
}

// FALSY
console.log(Boolean(""));
if ("") {
  console.log(true); // tidak akan masuk
}

console.log(Boolean(0));
if (0) {
  console.log(true); // tidak akan masuk
}

console.log(Boolean(null));
if (null) {
  console.log(true); // tidak akan masuk
}

console.log(Boolean(undefined));
if (undefined) {
  console.log(true); // tidak akan masuk
}

/*
console.log(Boolean(Nan));
if (Nan) {
  console.log(true); // tidak akan masuk
}
*/

// ! OPERATOR (NOT) *MEMBALIKAN HASILNYA, CTH: !TRUE MENJADI FALSE
const input = "";
console.log(Boolean(input));
console.log(!false);
console.log(!true);
if (input) console.log("input tidak boleh kosong"); // tidak jalan = false

// SHORT CIRCUITING
// && OPERATOR (AND) *
// JIKA OPERAND PERTAMA TRUE MAKA OPERAND KEDUA, JIKA OPERAND PERTAMA FALSE MAKA TAMPILKAN OPERAND PERTAMA
let value = "";
console.log(Boolean(value));
console.log(value && "Operand 2");

// || OPERATOR (OR) * SETIDAKNYA ADA 1 OPERATOR YANG HARUS TERPENUHI
// *JIKA OPERAND PERTAMA TRUE MAKA TAMPILKAN OPERAND PERTAMA, JIKA OPERAND PERTAMA FALSE MAKA TAMPILKAN OPERAND KEDUA
console.log(value || "Operand 2");
