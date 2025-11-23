h1 = document.querySelector("h1");

function changeColor(color, delay,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}


async function demo() {
   try{
     await changeColor("red", 1000);
     await changeColor("orange", 1000);
     await changeColor("aqua", 1000);
     await changeColor("blue", 1000);
   } catch (err) {
    console.log("error caught");
    console.log(err);
   }

    let a = 5;
    console.log(a);
    console.log("new number = ", a + 3);
} 


/* changeColor("red", 1000)
.then(() =>{
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() =>{
    console.log("green color was completed");
    return changeColor("yellow", 3000);
})
.then(() =>{
    console.log("blue color was completed");
    return changeColor("purple", 1000);
})
.then(() =>{
    console.log("pink color was completed");
}); */





                        // Async Function In Js 

    /* An async function is a special type of function in JavaScript 
        jo Promise return karti hai automatically.*/

//syntax
/*async function greet() {
    //throw "some random error";
throw "404 page not found"; 
    return "hello asif" ;
}
greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : ", result);
    })
    .catch((err) => {
        console.log("promise was rejected with err: ",err);
    }); */





                        // await keywords

/*await keyword sirf async function ke andar hi use hota hai.
     Ye kisi Promise ke result ka wait karta hai, bina code ko block kiye.*/

//syntax
/* let result = await somePromise; */

// for ex

/* function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
};

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
} */




/*simple example of async function*/ 

  /*async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data mil gaya!"), 2000);
  });

  let result = await promise;
  console.log(result);
}
  fetchData();*/





// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("aqua", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("purple", 1000,);
//                 });
//             });
//         });
//     });
// }); 

// this is called callback hell nessting codes



          
     // 2nd example

 /* function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
  "lnct college", 
    () => {
        console.log("success : your data was saved");
        savetoDb(
            "hello Asif", 
            () => {
               console.log("success2: data2 saved");
            }, 
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("failure : weak connection. data not saved: ");
    }
); */






                 //Promises topics

    /*function savetoDb(data) {
        return new Promise((resolve, reject)=> {
            let internetSpeed = Math.floor(Math.random() * 10) + 1;
            if(internetSpeed > 4) {
                resolve("success : data was saved");
            } else {
                reject("failure : weak connection");
            }
        });
    }

    savetoDb("lnct college")
        .then(() => {
            console.log("data1 saved");
            console.log("result of promise: ", result);
            return savetoDb("hellomallick");
        })
        .then(() => {
            console.log("data2 saved");
            console.log("result of promise: ", result);
            return savetoDb("asif");
        })
        .then(() => {
            console.log("data3 saved");
            console.log("result of promise: ", result);
        })
        .catch(() => {
            console.log("promise was rejected");
            console.log("error of promise: ", error);
        });*/
