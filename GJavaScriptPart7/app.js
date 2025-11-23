                       // this keywords topic

/*"JavaScript mein this ek special keyword hai jo current context ya environment 
   ke object ko refer karta hai jahan se function call hua hai."

🔹 Easy Words Mein:
            Jab tum function ya method likhte ho, 
            aur uske andar this likhte ho,To this batata hai ki kis object 
            ke through wo function run ho raha hai.
            Context ke hisaab se this ka matlab badal jaata hai.*/



/* const student = {
    name: "Md Asif",
    age: 23,
    eng: 95,
    math: 86,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name}got avg marks = ${avg}`);
    }
}
  function getAvg(){
    console.log(this);
  } */

                            //Try and  Catch topic 
//"JavaScript mein try...catch ka use error handle karne ke liye hota hai,
//  taki program crash na ho aur hum errors ko smoothly handle kar sakein."

 /* console.log("hello");
 console.log("hello");
 let a = 5;
 try{
    console.log(a);
 } catch(err) {
    console.log("caught an erro...a is not defined");
    console.log(err);
}
console.log("hello2"); */

                       // Miscellaneous Topics in JavaScript
        //1st Arrow function Topics


/*const sum = (a,b)=> {
    console.log(a+b);
};
  const cube = (n) => {
    return n*n*n;
  };

  const pow = (a,b) => {
    return a ** b;
  };
  const hello =() => {
    console.log("hello world");
  };*/

                  //  Arrow function 2nd Topics
                   // Implicit return
// const mullti = (a, b) => a * b;

                   // Set timeout
            //setTimeout(function, timeout)
/*console.log("hi hello");

setTimeout(() => {
    console.log("Md Asif");
}, 10000);
 console.log("welcome to my coding ");
 console.log("welcome to my coding ");
 console.log("welcome to my coding ");
 console.log("welcome to my coding ");
 console.log("welcome to my coding ");*/

                // Set Interval
            //setInterval(function, timeout)
let id = setInterval(() => {
    console.log("Md Asif");
}, 1000);
console.log(id);

let id2 = setInterval(() => {
    console.log("Lnct college");
}, 3000);
console.log(id2);
    

