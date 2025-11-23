 // Ans 1:- 
 /*Qs1. Create a new input and button element on the page using JavaScript only. 
      Set the text of button to "Click me"; */
            
      /* let button = document.createElement("button");
            let input = document.createElement("input");
            button.innerText = "click me";

            document.querySelector("body").append(input);
            document.querySelector("body").append(button); */


// Ans 2:-
     /* Add following attributes to the element:-
            Change placeholder value of input to "username"
            Change the id of button to "btn" */

    Button.setAttribute("id", "btn");
         input.setAttribute("placeholder", "username");

         
// Ans 3:-
          /* Access the bin using the querySelector and button id. 
             Change the button background color to blue and text color to white*/

         let btn = document.querySelector("#btn");
              btn.classList.add("btnStyle");


// Ans 4:-
        /* Create an h1 element on the page and set its text to "DOM Practice" underlined. 
        Change its color to purple. */


          let h1 = document.createElement("h1");
          h1.innerHTML = "<u>DOM Practice</u>";
          document.querySelector("body").append(h1);


// Ans 5:-
         /*Create a p tag on the page and set its text to "LNCT College Delta Practice", 
         where Delta is bold.*/

         
         let p = document.createElement("p");
         p.innerHTMl = "LNCT College <b>Asif</b> practice";
         document.querySelector("body").append(p);
