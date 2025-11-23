// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}.`);
// }

// printName("Md Asif", 23);


                                     //Return  topic

    // function sum(a, b) {
    //     return a*b;
    // }
    // console.log(sum(3, 4));


    // function sum(a, b){
    //     console.log("hello");
    //     console.log("hello");
    //     return a+b;
    //     console.log("hello2");
    //     console.log("hello2");
    // }
    //  sum(2, 3);
    // console.log(sum(1, 2));

    // function isAdult(age) {
    //     if(age >= 18) {
    //         return "adult";
    //     } else {
    //         return "not adult";
    //     }
    //     console.log("bye bye");
    // }
                          
    
                                           //Scope topic


                              // function Scope
    // let sum = 54;  // global scope 

    // function calSum(a, b){
    //     // let sum =  a+b; //Function Scope
    //     console.log(sum);
    // }

    // calSum(1, 2);
    // console.log(sum);

                                        // Block Scope
// {
//     let a = 25;
// }

// console.log(a);


// for(let i=1; i<=5; i++){
//     console.log(i);
//     console.log(i);
// }


                                        // Lexical Scope

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//      function innerFunc(){  // funtion scope
//         let a = 10;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(a);
//     innerFunc();
// }


                              //Function Expression
// let name = "Md Asif";

// let sum = function(a,b){
//     return a*b;
// }

// let hello = function(){
//     console.log("hello");
// }

                        //Higher order function


// function multipleGreet(func, count){  //Higher order function
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(function(){console.log("Assalamualykum habibi")}, 20);



                             //Higher order function
                        //(Returns a function)

// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n) {
//            console.log(!(n%2 == 0));
//         }
//         return odd;
//     } else if(request == "even"){
//         let  even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd"; //even


                                //    Method topics
const calculator = {
    num : 55,
    add : function (a, b){
        return a + b;
    },
    sub : function (a, b){
        return a - b;
    },
    multi : function (a, b){
        return a * b;
    },
    div : function (a, b){
        return a / b;
    }
};


