// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;

//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const sm = new Human("sm", 28, "man");

// const sayHi = (something: Human): string => {
//   return `Hello ${something.name}, you are ${something.age} years old, you are a ${something.gender}!`;
// };

// console.log(sayHi(sm));
import * as CryptoJS from "crypto-js";

class block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: block = new block(
  0,
  "1212121231231",
  "",
  "hello",
  123123123
);

let blockChain: [block] = [genesisBlock];

console.log(blockChain);

export {};
