                           /*1st Topic forEach*/

// let arr =[1,2,3,4,5,6,7,8];
//     arr.forEach((el) => {
//         console.log(el);
//     });

// arr.forEach(function(el){
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

/* let arr = [
    {
        name: "Asif",
        marks: 98,
    }, 
    {
        name: "Waqqar",
        marks: 95,
    }, 
    {
        name: "Amber",
        marks: 92,
    }, 
    {
        name: "Tauhid",
        marks: 90,
    }, 
    {
        name: "Shadab",
        marks: 93,
    },
];

    arr.forEach((student) => {
        console.log(student.marks);
    }); */



                        /*2nd Topic (map)*/

/* let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * 2;
}); */

/* let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * el;
}); */

/* let num = [1, 2, 3, 4];
let double = num.map((el) => {}); */


/* let students = [
    {
        name: "Asif",
        marks: 98,
    }, 
    {
        name: "Waqqar",
        marks: 95,
    }, 
    {
        name: "Amber",
        marks: 92,
    }, 
    {
        name: "Tauhid",
        marks: 90,
    }, 
    {
        name: "Shadab",
        marks: 93,
    },
]; 

    let gpa = students.map((el) => {
        return el.marks / 10;
    }); */
                
                           /*3rd Topic (filter)*/

/* let nums = [1, 2, 3, 4, 6, 8, 9, 11, 12, 10, 14, 13];
let ans = nums.filter((el) => {
    return el % 2 == 0; // even -> true, odd -> false
});  // output for even */


/* let num = [1, 2, 3, 4, 6, 8, 9, 11, 12, 10, 14, 13];
let ans = num.filter((el) => {
    return el % 2 != 0; // even -> true, odd -> false
});  // output for odd */


                              /*4th Topic (Every)*/
                              /* True Or False */

/* let nums = [2, 4, 6, 8];
   let allEven = nums.every(function(num) {
  return num % 2 === 0;
});
console.log(allEven); */


/* let ages = [22, 18, 25, 17];
   let allAdults = ages.every(age => age >= 18);
   console.log(allAdults); */


                              /*5th Topic (Some)*/
                              /* True Or False */

/* let numbers = [1, 3, 5, 6];
   let hasEven = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEven);
 output :- agar ek bhi element condition pass krta hai to true*/



 /* let usersOnline = [false, false, true, false];
    let isAnyoneOnline = usersOnline.some(status => status === true);
    console.log(isAnyoneOnline); // true */


                            /*6th Topic (Reduce)*/
/* let nums = [1, 2, 3, 4];
let finalVal = nums.reduce((res, el) => {
    console.log(res);
    return res + el;
})
console.log(finalVal); */


                 /* Q:- Finding Maximum in array with reduce */
/* let arr =  [1, 4, 2, 5, 7, 8, 10, 12, 6];

let max = -1;
 for (let i = 0; i < arr.length; [i++]) {
    if (max < arr[i]) {
        max = arr[i];
    }
 }
 console.log(max); */


/* let arr =  [1, 4, 2, 5, 7, 8, 10, 12, 6];
 let max = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
 });
 console.log(max);  */


                  /* Q:- Finding Minimum in array with reduce */

let arr =  [1, 4, 2, 5, 7, 8, 10, 12, 6];

let min = arr[0];
 for (let i = 1; i < arr.length; [i++]) {
    if (arr[i] < min) {
        min = arr[i];
    }
 }
 console.log(min); 


/* let arr =  [1, 4, 2, 5, 7, 8, 10, 12, 6];
 let min = arr.reduce((min, el) => {
    if (min > el) {
        return el;
    } else {
        return min;
    }
 });
 console.log(min); */