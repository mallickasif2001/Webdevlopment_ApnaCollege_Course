// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// arr1.sayhello = () => {
//     console.log("hello!, i am arr");
// };

// arr2.sayhello = () => {
//     console.log("hello!, i am arr");
// };



// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     }
//     return person;
// }


                 // Constructors:- doesn't return anything & start with capital letters
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, My name is ${this.name}`);
// };

            // Class Constructor

// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi,My name is ${this.name}`);
//     }
// }
// let p1 = new Person("amber", 25);
// let p2 = new Person("adam", 26);



                   // Inheritance

class Person{
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age;
    }
    talk() {
        console.log(` Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("Student class constructor")
        super(name,age);  //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, marks) {
        console.log("Teacher class constructor")
        super(name,age); //parent class constructor is being called
        this.subject = subject;
    }
}

