const mongoose = require("mongoose");
const { passHash } = require("../../controllers/utils").auth;
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    trim: true,
    lowercase: true,
  },
  name: { type: String, required: [true, "Name is required."] },
  email: {
    type: String,
    unique: [true, "This email is already in use"],
    required: [true, "Email is required."],
    validate: {
      validator: function (v) {
        return /[a-zA-z0-9]*@\w+\.\w+/.test(v) && /^[^\s]+$/.test(v);
      },
      message: "Please enter a valid email.",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return (
          /[a-z]+/.test(v) &&
          /[A-Z]+/.test(v) &&
          /[0-9]+/.test(v) &&
          /\W+/.test(v)
        );
      },
      message: "Password does not meet specifications.",
    },
  },
  reg_date: { type: Date, default: Date.now },
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.password;
  },
});

userSchema.post("validate", async function (user, next) {
  user.password = await passHash(this.password);
  console.log(this.password);
  next();
});

module.exports = User = mongoose.model("User", userSchema);
