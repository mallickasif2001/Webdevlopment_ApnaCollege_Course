const express = require("express");
const app =  express();
const ExpressError = require("./ExpressError")
 

                               //Multiple function middlewarea
 const checkToken = (req, res, next) => {
 let {token} = req.query;
 if(token === "giveaccess") {
    next();
}
 throw new ExpressError(401, "ACCESS DENIED!");
};


app.get("/api", checkToken, (req, res) => {
    res.send("data");
});


app.get("/", (req, res) => {
    res.send("Hi I am root");
});


app.get("/random", (req, res) => {
    res.send("this is  a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw  new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
    let{ status = 500, message = "SOME ERROR Occured+"} = err;
    res.status(status).send(message);
});


// app.use((err, req, res, next) => {
//     console.log("--------------ERROR2 MIDDLEWARE-------------");
//     next(err);
// });


// app.use((req, res) => {
//     res.status(404).send("page not found!");
// });

app.listen(8080, () => {
    console.log("server listen to port 8080");
});












// app.use("/random", (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });


// app.get("/api", (req, res) => {
//     res.send("data");
// });



// app.get("/wrong", (req, res) => {
//     abcd = abcd;
// });







// middleware -> response send
//  app.use( (req, res, next) => {
//     console.log("Hii I am First middleware");
//     next();
//  });

//  app.use( (req, res, next) => {
//     console.log("Hii I am Second middleware");
//     next();
//  });

// app.use ( (req, res, next) => {
//     req.time = new Date (Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });





           /* Middlewares actual functionality */

// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// });