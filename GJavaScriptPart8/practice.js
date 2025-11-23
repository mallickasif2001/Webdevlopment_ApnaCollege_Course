                                /* JavaScript Practice Question Part 08 */

/* Qs.1  Square and sum the array elements using the arrow function.
         and then find the average of the array. */

/* let arr = [4, 4, 4, 4];

let squares = arr.map(x => x * x);             
let sum = squares.reduce((a, b) => a + b, 0);   
let average = sum / arr.length;                 

console.log("Average of squares:", average); */




/* Qs2. Create a new array using the map function whose each element is equal to 
        the original element plus 5. */

/* let arr = [10, 20, 30];

let newArr = arr.map(x => x + 5);

console.log(newArr); // Output: [15, 25, 35] */




/* Qs3. Create a new array whose elements are in uppercase of words present in the original array. */
   
/* let words = ["apple", "banana", "cherry"];

let upperWords = words.map(word => word.toUpperCase());

console.log(upperWords); // Output: ["APPLE", "BANANA", "CHERRY"] */




/* Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable 
        number of arguments. The function should return a new array with the original array 
        values and all of the additional arguments doubled */

  /* function doubleAndReturnArgs(arr, ...args) {
  let doubledArgs = args.map(arg => arg * 2);  
  return [...arr, ...doubledArgs];            
}
let result = doubleAndReturnArgs([10, 20], 5, 15);
console.log(result); // Output: [10, 20, 10, 30] */



/* Qs5. Write a function called mergeObjects that accepts two objects and returns a new object 
    which contains all the keys and values of the first object and send object. */

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let objA = { a: 1, b: 2 };
let objB = { c: 3, d: 4 };

// Step 3: Function call
let result = mergeObjects(objA, objB);
console.log(result); // Output: { a: 1, b: 2, c: 3, d: 4 }

   
   




