const mongoose  = require("mongoose");

const Schema = mongoose.Schema

const profSchema = new Schema({
  'Professor name':String,
  'Email ID': String,
  'Phone Number': String,
  'Professor Code': String,
  'Department Code': String,
  'Subject Code': String,
  'Subject Name': String
},{collection:"professors"})

const professors = mongoose.model("professors",profSchema)
module.exports = professors
