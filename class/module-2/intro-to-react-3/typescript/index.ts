// typescript perlu declare / contract / static

let titleTS: string = "Hello World";
// titleTS = 5; akan error karena typescript tdk memperbolehkan perubahan

// direkomendasikan menggunakan interface
interface IUser {
  name: string;
  age: number;
  email: string;
}

// type User = {
//     name: string,
//     age: number
// }

let userTS: IUser = {
  name: "John",
  age: 52,
  email: "john@gmail.com",
};

console.log(userTS.name);

function funcTS(user: IUser, number: number): any {
  return user.name + user.age;
}

const nameTS = funcTS(userTS, 5);
console.log(nameTS);
