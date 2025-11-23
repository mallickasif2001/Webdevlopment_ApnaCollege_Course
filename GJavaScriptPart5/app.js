// const student = {
//     name: "Md Asif",
//     age: 23,
//     sub: "computer",
//     marks: 95, 
// };

// const item = {
//     price: 100.99,
//     discount: 50,
//     colors: ["red", "pink"]
// };


// const post = {
//     username: "mallickasi f2001",
//     content: "This is my #firstPost",
//     like: 200,
//     repost: 5,
//     tags: ["@asifmallick", "@usmani08", "@astkcollege"]

// };

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e",
// };


                 // ADD/Update value
// const student = {
//     name: "Md Asif",
//     age: 23,
//     marks: 95.8,
//     city: "Bhopal",
// };

                //Object of object
// const classInfo = {
//     Asif: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     mallick: {
//         grade: "A",
//         city: "pune"
//     },
//     Tanweer: {
//         grade: "O",
//         city: "mumbai"
//     }
// };


                         //Array of Objects

// const classInfo = [
//     {
//         Name: "Asif",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         Name: "tauhid",
//         grade: "A",
//         city: "Pune"
//     },
//     {
//         Name: "mallick",
//         grade: "o",
//         city: "Delhi"
//     }

// ]
                            // Guessing Game Numbers
 const max = prompt("enter the maximum number");
 

 const random = Math.floor(Math.random() * max) + 1;

 let guess = prompt("guess the number");

 while (true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! congrats! random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: your guess was too small. please try again");
    }
    else{
        guess = prompt("hint: your guess was too large. please try again");
    }
    
    // else {
    //     guess = prompt("your guess was wrong. please try again");
    // }
 }