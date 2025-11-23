// function printPoem() {
//     console.log("Twinkle Twinkle little star");
//     console.log("how i wonder what you are");
//     console.log("up above the world so high");
//     console.log("like a daimond in the sky");
// }

// printPoem();




                            //    Practice Question 02
// Create a function to roll a dice & always display the value of the dice (1 to 6)

// function rollDice() {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log(rand);
// }

// rollDice();





                     //    Practice Question 03

// function sum(a,b){
//     console.log(a+b);
// }

// function calAvg(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }


                        //    Practice Question 04
// function printable(n){
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i)
//     }
// }

// calcAvg(2, 4, 6);

                         // Practice question 05

// let str = ["hi", "hello", "bye", "!"];

// function concat(str){
//     let result = "";

//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }


                        // Practice Question 06
    
let greet = "hello";  // global scope
    function changeGreet(){
        let greet = " Assalamualyakum"; // function scope
        console.log(greet);
        function innerGreet(){
            console.log(greet);  // lexical scope
        }
        innerGreet();
    }
    console.log(greet);
    changeGreet();