const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already Present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: String,
    min: 10,
    max: 10,
    require: true,
    unique: true
  },
  address:{
    type: String,
    require: true
  }

});


//we will create a new collection
const Student = new mongoose.model('Student', studentSchema)

module.exports = Student;