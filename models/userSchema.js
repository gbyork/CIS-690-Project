const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Role: { type: String, required: true }
});

userSchema.methods.generateHash = function (Password) {
  return bcrypt.hashSync(Password, bcrypt.genSaltSync(8), null);
};

// checks if password is valid
userSchema.methods.validPassword = function (Password) {
  return bcrypt.compareSync(Password, this.Password);
};
const User = mongoose.model('User', userSchema);
module.exports = User;

//Set up for what attributes patient have that will need to be typed into form when creating