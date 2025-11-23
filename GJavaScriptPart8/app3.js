                              // Rest in js toic


 /* function sum(...args) {  //arguments
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us:", args[i]);
    }
}

function min() {
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);
} */

/* function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}

function min(...args){
    console.log(msg);
        return args.reduce((min,el) => {
            if (min > el) {
                return el;
            } else {
                return min;
            }
        });
} */


                               //  Destructing in js topic for arrays

/* let names = ["Aman", "Pooja", "Ravi", "Tauhid", "Nazeer", "Amber", "Waqqar"];
   let [first, second, third, ...others] = names; */



                            //  Destructing in js topic for Objects

const student = {
  name: "Taimur",
  age: 15,
  city: "Delhi",
  class: 8,
  subjects: ["English", "Hindi", "Maths", "Phy", "chem"],
  username: "taimur@01",
  password: "1234",
};

let {username: user, password: secret, city: place, } = student;


