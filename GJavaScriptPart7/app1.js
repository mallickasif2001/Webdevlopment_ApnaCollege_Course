                        //how to use  this function with Arrow function (topic)
/*const student = {
    name: "Mohammad",
    marks: 79,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parent's scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout( () => {
            console.log("this"); //student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log("this");  // window 
        }, 2000);
     },
}; */












                     //Practice question 

// Q1 write an arrow function that returns the square of a number 'n'.

/*const square = (n) => n * n;
console.log(square(4));  // Output: 16*/


// Q2 write a function that print "hello asif " 8 times at intervals of 2s each.


let id = setInterval(() => {
    console.log("Hello Asif");
}, 1000);

setTimeout(() =>{
    clearInterval(id);
    console.log("clear interval ran");
}, 8000);