require("dotenv").config();
const mongoose = require('mongoose');

module.exports = function studentDB() {
// Connect to MongoDB locally
mongoose.connect("mongodb+srv://seprj:seproject@cluster0.fworf.mongodb.net/resultSystemDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
}



