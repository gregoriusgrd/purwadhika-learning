console.log("hello world");

// 1. area of rectangle (luas persegi panjang)
let length = 5;
let width = 3;

// luas persegi panjang = l * w
const areaOfRectangle = length * width;
console.log(areaOfRectangle);

// 2. perimeter of rectangle (keliling persegi panjang)
length = 5;
width = 3;

// keliling persegi panjang = 2(l + w)
const perimeterOfRectangle = 2 * (length + width);
console.log(perimeterOfRectangle);

// 3. diameter, circumference (keliling), and area of circle (luas lingkaran)
let radius = 5;

// diameter = D = 2 * r
const diameter = 2 * radius;

// keliling lingkaran = C = 2πr
const circumference = Math.PI * diameter;

// luas lingkaran = A = 2πr^2
// untuk pi bisa pakai 3.14 atau Math.PI

//const areaOfCircle = Math.PI * radius ** 2;
const areaOfCircle = (circumference * radius) / 2;
console.log(
  `diameter = ${diameter}, circumference = ${circumference.toFixed(
    4
  )}, area = ${areaOfCircle.toFixed(3)}`
);

// 4. angles of triangle (sudut segitiga)
let a = 80;
let b = 65;

// sudut ke-3 = 180 - (angle 1 + angle 2)
const anglesOfTriangle = 180 - (a + b);
console.log(anglesOfTriangle);

// 5. convert days to years, months and days (notes: 1 year: 365 days, 1 month: 30 days)
// example: 400 days > 1 year, 1 month, 5 days
// example:  366 days > 1 year, 0 month, 1 days

// MY CODE

/*
let input = 400;
let year = Math.floor(input / 365);
let daysLeft = input % 365;
let month = Math.floor(daysLeft / (365 / 12));
// let days =
console.log(`${input} days > ${year} year, ${month} month, `);
*/

// CORRECTION
let daysParam = 400;
let year = Math.floor(daysParam / 365);
console.log(year);

let month = Math.floor((daysParam % 365) / 30);
console.log(month);

let days = (daysParam % 365) % 30;
console.log(days);

console.log(`${daysParam} days > ${year} year, ${month} month, ${days} days`);

// 6. get difference between dates in days
// example: date1 = 2022-01-20, date2 = 2022-01-22
// output: 2

// MY CODE
/*
let date1 = 2022 - 1 - 20;
let date2 = 2022 - 1 - 22;
let diff = date1 - date2;
console.log(diff);
*/

// CORRECTION
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let diff = (date2.getTime() - date1.getTime()) / (24 * 3600 * 1000); // + konversion milisecond
console.log(diff); //

/*
// NOTES: Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
*/
