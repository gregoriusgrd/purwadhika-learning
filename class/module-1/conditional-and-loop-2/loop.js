// LOOP STATEMENT

const tampilkan = 3;
console.log();
// FOR LOOP

for (let i = 1; i < tampilkan; i++) {
  console.log(i);
  console.log("looping for");
}

// WHILE (SELAMA)
let x = 1;

// STOP LOOPING DENGAN CONDITIONAL
while (x <= tampilkan) {
  console.log(x);
  console.log("while condition");
  x++;
}

// STOP LOOPING DENGAN BREAK
x = 1;
while (true) {
  console.log(x);
  console.log("while break");
  if (x === 5) {
    break;
  }
  x++;
}

// DO WHILE (jarang dipakai)
x = 1;
do {
  console.log(x);
  console.log("do while");
  x++;
} while (x <= tampilkan);
