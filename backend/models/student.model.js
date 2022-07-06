const mongoose  = require("mongoose");
const Schema = mongoose.Schema

const studentSchema = new Schema({
  Name:String,
  'Date of Birth': String,
  Gmail : String,
  'Phone Number': String,
  'Enrollment Number':String,
  'Batch Year':String
},{collection:"students"})

const student = mongoose.model("student",studentSchema)
module.exports = student
