const express = require("express")
const { validateUser } = require("../controllers/auth.js")


const router = express.Router()

router.route("/").post(validateUser)

module.exports = router