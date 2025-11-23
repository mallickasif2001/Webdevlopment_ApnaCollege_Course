                      /* Part 1 */

/* let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para was clicked ");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("mouse inside box");
}); */



                        /* Part 2 */

let btn =document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");


btn.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = "aqua"; 
});

p.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = "red"; 
});

h1.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = "yellow"; 
});

h3.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = "green"; 
});