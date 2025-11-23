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
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "sherlockhomes",
    addresses: [{
        location: "114-B Hazrat Nizzamuuddin Colony Bhopal",
        city: "Bhopal",
      }],
  });

  // Add another address
  user1.addresses.push({ location: "11-A Nabi Nagar Kakrar Bihar", city: "Sheikhpura",});
  let result = await user1.save();
  console.log(result);
};

addUsers();
