const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
    regId: String,
    Intmark: Number,
    Extmark: Number,
    Totalmark:{
        type: Number,
    },
});

const cseModel = mongoose.model("cseDB", markSchema);
const eceModel = mongoose.model("eceDB", markSchema);
const eeeModel = mongoose.model("eeeDB", markSchema);
const mecModel = mongoose.model("mecDB", markSchema);
const civModel = mongoose.model("civDB", markSchema);


module.exports = { cseModel, eceModel, eeeModel, mecModel, civModel };

