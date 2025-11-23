const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  emai: String,
}); 

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    } 
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result);
};

addData();

// const del = async() => {
//     await Post.findByIdAndDelete("6904a5edd9705dc2c785177c");
//     await User.findByIdAndDelete("6904a4101bf22c1b9e8874f6");
// }

// del();