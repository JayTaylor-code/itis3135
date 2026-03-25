"use strict";

console.log("Hello, World!");

function hello() {
    console.log("I am inside the hello function!");     
}

console.log("The properties of the hello function object include: "+Object.getOwnPropertyNames(hello));
console.log(`The hello.prototype object: ${hello.prototype}`)

let hp = Object.getPrototypeOf(hello);
console.log(`The prototype of the hello function object is Function.prototype: ${hp===Function.prototype}`);

// Existing prototype property
hello.prototype.name2 = "Hello_name";
console.log("The properties of hello.prototype include: "+Object.getOwnPropertyNames(hello.prototype));

// Create instance
let x = new hello();
console.log(x);
console.log("The properties of x include: "+Object.getOwnPropertyNames(x));
console.log("The constructor of x is: "+x.constructor);

// ===== Question 2 =====
hello.name1 = "Better name";

console.log("After adding hello.name1:");
console.log("x.name1 is: " +x.name1); // undefined
console.log("x.name2 is: " +x.name2); // Hello_name

// ===== Question 3 =====
hello.name2 = "Better name";

console.log("After adding hello.name2:");
console.log("x.name1 is: " +x.name1); // still undefined
console.log("x.name2 is: " +x.name2); // still Hello_name (from prototype)
