const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successfully");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);


User.deleteMany({age: 9}).then(res => {
    console.log(res);
});

// User.deleteOne({name: "Eve"})
// .then(res => {
//     console.log(res);
// });


// User.updateOne({name: "Adam"}, {age: 1000})
// .then(res => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });



// User.findById("68dccc09d057aebe0f82d3f3")
//   .then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });



// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 30},
//     {name: "Asif", email: "asif@gmail.com", age: 23},
//     {name: "Waqqar", email: "waqqar@gmail.com", age: 25},
//     {name: "Ishaq", email: "ishaq@gmail.com", age: 31},
//     {name: "Tauhid", email: "tauhid@gmail.com", age: 38}
// ]).then((res) => {
//     console.log(res);
// });




// const user2 = new User({
//     name: "Eve",
//     email: "eve786@gmail.com",
//     age: 96,
// });



// user2
//    .save()
//    .then((res) => {
//     console.log(res);
//   })
//   .catch(err =>
//      {console.log(err);
// });