const mongoose =  require("mongoose")

const Schema = mongoose.Schema

const stdCredSchema = new Schema({
  'UserID': String,
  'Student Name':String,
  'Password': String
},{collection:'StdCredentials'})

const stdCred = mongoose.model("stdCred",stdCredSchema)
module.exports = stdCred
