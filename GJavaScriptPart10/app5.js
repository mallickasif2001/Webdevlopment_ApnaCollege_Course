                     /* Form Events */

/* let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form);

    let user = this.elements[0];
    let pass = this.elements[1];
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is not set to ${pass.value}`); */


     
                  /*same code aise bhi likh ke run kr skte ho*/

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    
    // console.log(user.value);
    // console.log(pass.value);

    // alert(`Hi ${user.value}, your password is not set to ${pass.value}`);
    //console.dir(inp);
    //alert("form submitted");
// });


                  

                        //More Events In (Change Event) new topic

/*let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("input changed");
    console.log("final value =", this.value);
}); */



                     //More Events In (Input Event) new topic

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value =", this.value);
});

user.addEventListener("change", function () {
    console.log("input event");
    console.log("final value =", this.value);
});
