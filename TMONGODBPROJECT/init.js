const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));


async function  main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsaap');
}

let allChats = [
 {
    from: "rohit",
    to: "preeti",
    message: "send me js callback",
    created_at: new Date(),
 },
 {
    from: "neha",
    to: "priya",
    message: "send me your exam sheets",
    created_at:new Date(),
 },
 {
    from: "rohit",
    to: "preeti",
    message: "send me js callback",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "neha",
    message: "let's study React today",
    created_at: new Date(),
  },
  {
    from: "suman",
    to: "raj",
    message: "did you complete the assignment?",
    created_at: new Date(),
  },
  {
    from: "priya",
    to: "arjun",
    message: "don't forget the meeting",
    created_at: new Date(),
  },
  {
    from: "vijay",
    to: "sona",
    message: "good morning!",
    created_at: new Date(),
  },
  {
    from: "meena",
    to: "alok",
    message: "can you share the notes?",
    created_at: new Date(),
  },
  {
    from: "arun",
    to: "pooja",
    message: "happy birthday 🎉",
    created_at: new Date(),
  },
  {
    from: "karan",
    to: "simran",
    message: "call me when you are free",
    created_at: new Date(),
  },
  {
    from: "rekha",
    to: "mohan",
    message: "where are you?",
    created_at: new Date(),
  },
  {
    from: "anil",
    to: "deepa",
    message: "lets go for lunch",
    created_at: new Date(),
  }
];

chat.insertMany(allChats)
.then(() => {
    console.log("chats inserted successfully");
})
.catch(err => {
    console.log("Error inserting chats:", err);
});