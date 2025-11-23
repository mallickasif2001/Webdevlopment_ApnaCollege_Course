                                  /* Dom Events topic */
 
/*let btn = document.querySelector("button");
console.dir(btn);

 btn.onclick = function () {
    alert("button was clicked");
}; */


                         /* on click */

/* let btns = document.querySelectorAll("buttton");
for(btn of btns){
    btn.onclick = sayHello;
}
function sayHello() {
    alert("hello Asif!");
}
btn.onclick = sayHello; */

                       
       
                               /* on mouse enter */

/*let btns = document.querySelectorAll("buttton");

for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter =  function () {
        console.log("you entered a button");
    };
    console.dir(btn);
}
function sayHello() {
    alert("hello Asif!");
}*/


                                    /* Event Listner */

// let btns = document.querySelectorAll("buttton");

// for (let btn of btns) {
//     //btns.onclick = sayHello;
//     //btns.onclick = sayName;

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {
//         console.log("you doubled clicked me");
//      });
//     }

//     function sayHello() {
//         alert("hello!");
//     } 

//     function sayName() {
//         alert("LNCT College!");
//     }

let btns = document.querySelectorAll("button");

for (let btn of btns) {
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function () {
        console.log("you doubled clicked me");
     });
}

function sayHello() {
    alert("hello!");
} 

function sayName() {
    alert("LNCT College!");
}
