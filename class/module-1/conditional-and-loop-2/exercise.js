// 1. number is odd or even
// example: 25 > odd number, 2 > even number

let n = 0;
if (n % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// 2. check if number is prime number or not
let number = 7;
let isPrime = true;

if (number !== 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
} else {
  console.log("Masukan Bilangan selain 1");
}

// 3. find the sum of the numbers 1 to N
// example: 5 > 1 + 2 + 3 + 4 + 5 = 15

n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(sum); // test if we log here
}

console.log(sum); // console.log should be outside (answer)

// 4. find factorial of a number
// example: 4! > 4 x 3 x 2 x 1 = 24
// example: 6! > 6 x 5 x 4 x 3 x 2 x 1 = 720

let num4 = 4;
let factorial = num4;
let message = `!${num4} -> ${num4} x `;

for (let i = factorial - 1; i >= 1; i--) {
  factorial *= i;
  message += i === 1 ? `${i} = ${factorial}` : `${i} x `;
}

console.log(message); // answer

// 5. first N fibonacci number
// example: 15 > 610

let number5 = 15;
sum = 0;
let n1 = 0;
let n2 = 1;

for (let i = 0; i < number5; i++) {
  console.log(i);

  sum = n1 + n2;
  n1 = n2;
  n2 = sum;
}

console.log(n1);
