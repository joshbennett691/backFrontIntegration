const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ['Authorizer', 'Employee', 'Client'],
      default: 'Client'
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
