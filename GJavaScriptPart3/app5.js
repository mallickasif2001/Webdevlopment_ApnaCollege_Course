                  // Practice Question

                  //Question 1

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
                    
// for (let i = 0; i<arr.length; i++) {
// if (arr[i] === num) {
// arr.splice(i, 1);
//  }
// }
// console.log(arr);  // Output: [1, 3, 4, 5, 6, 3]


                //Question 2  

// let number = 287152;
// let cout = 0;

// let copy = number;

// while(copy>0){
//     cout++;

//     copy = Math.floor(copy/10);
// }
// console.log(cout);


                            //Question 3

let num = 4456325;
let sum = 0; 
 let copy = num;
 while(copy>0){
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
 }
 console.log(sum);


             // Question 4

// let n = 10;
// let fact = 1;
// for (let i = 1; i<=n; i++){
//     fact *= i;
// }
// console.log(`fact of ${n} is: ${fact}`);


               // Question 5

// let arr = [2, 5, 10, 4, 2, 7, 1, 9, 50];
// let largest = 0;

// for(let i = 0; i <= arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log (largest);



