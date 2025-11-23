const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successfully");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        types: String,
        enum: ["ficton", "non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

const books = [
  { title: "Mathematics XII", author: "NCERT", price: 550 },
  { title: "Gone Girl", author: "Laiba", price: 450},
  { title: "Physics XII", author: "NCERT", price: 600 },
  { title: "Chemistry XII", author: "NCERT", price: 580 },
  { title: "Biology XII", author: "NCERT", price: 620 },
  { title: "Computer Science", author: "Sumita Arora", price: 700 },
  { title: "English Core XII", author: "NCERT", price: 300 },
  { title: "Economics XII", author: "NCERT", price: 450 },
  { title: "Accountancy XII", author: "NCERT", price: 500 },
  { title: "Business Studies XII", author: "NCERT", price: 480 },
  { title: "History XII", author: "NCERT", price: 400 }
];

Book.insertMany(books)
  .then(res => {
    console.log("Books added successfully:", res);
  })
  .catch(err => {
    console.log("Error inserting books:", err);
  });





// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "NCRT",
//     price: 550
// })
// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });