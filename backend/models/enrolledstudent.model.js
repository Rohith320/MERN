const mongoose = require("mongoose");

const Schema = mongoose.Schema

const enrolledStdSchema = new Schema({
  'Subject Code':String,
  'Subject Name': String,
  'Deparment' : String,
  'Students enrolled': [String]
},{collection:"enrolledstds"})

const enrolledstd = mongoose.model("enrolledstd",enrolledStdSchema)
module.exports = enrolledstd