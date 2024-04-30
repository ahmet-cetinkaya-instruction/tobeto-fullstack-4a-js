console.log("Helloworld");

//#region Değişkenler

// Number
const number1Example = 10;
const number2Example = 3.14;
console.log(typeof number1Example, number1Example)
console.log(typeof number2Example, number2Example)

// String
const stringExample = "Ahmet";
console.log(typeof stringExample, stringExample);

// Boolean
const booleanExample = true;
console.log(typeof booleanExample, booleanExample);

// null: Boş değer geçildiğini belirtir.
let nullExample = null;
console.log(typeof nullExample, nullExample);

// undefined: Herhangi bir değer geçilmediğini belirtir.
let undefinedExample;
console.log(typeof undefinedExample, undefinedExample);

// Array
const arrayExample = [1, "ahmet", true, {}, null];
// const arr2 = new Array(1, 2, 3, 4, 5);
arrayExample.push("yeni eleman");
console.log(typeof arrayExample, arrayExample, arrayExample[1]);

// Object
const objectExample = {
    name: "Ahmet",
    age: 25,
    isStudent: true,
    address: {
        city: "Ankara",
        district: "Çankaya"
    },
    // Arrow function
    getFullName: () => {
        return this.name + " " + this.surname;
    },
};
// const objectExample2 = new Object();
// objectExample2.name = "Ahmet";
// objectExample2.age = 25;
// objectExample2.isStudent = true;
// objectExample2.address = {
//     city: "Ankara",
//     district: "Çankaya"
// };
// objectExample2.getFullName = function () {
//     return this.name + " " + this.surname;
// };
console.log(typeof objectExample, objectExample, objectExample.name, objectExample['name']);

// Function
function sum(a, b) {
    return a + b;
}
console.log(typeof sum, sum(5, 10));

const sumExample = sum
console.log(typeof sum, sumExample(5, 10));

// Date
const dateExample = new Date();
console.log(typeof dateExample, dateExample);

// RegExp
const regExpStringExample = "abc"
const regExpExample = /abc/;
// const regExpExample2 = new RegExp("abc");
console.log(typeof regExpExample, regExpExample.test(regExpStringExample));