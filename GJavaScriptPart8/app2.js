                             /*   Default Parameter */

/* function greet(name = "Asif") {
  console.log("Hello, " + name + "!");
}
greet();           
greet("mallick"); */

 

                               /* Spread */


/* const fruits = ["apple", "banana"];
const copyFruits = [...fruits];

console.log(copyFruits);  // ["apple", "banana"] */



/*const boys = ["Raj", "Aman"];
const girls = ["Pooja", "Neha"];

const all = [...boys, ...girls];

console.log(all);  // ["Raj", "Aman", "Pooja", "Neha"]*/


// let arr = [1,2,3,4,5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,9];

// let nums = [...even,  ...odd];


               /* spread with object literals */

const data = {
    email: "taimurlang@gmail.com",
    password: "Taimur@2022",
};

const dataCopy = {...data, id: 123, country: "India"};

let obj1 = {..."Asif"};x


