const mongoose =  require("mongoose")

const Schema = mongoose.Schema

const profCredSchema = new Schema({
  'UserID': String,
  'Professor Name':String,
  'Password': String
},{collection:'ProfCredentials'})

const profCred = mongoose.model("profCred",profCredSchema)
module.exports = profCred
