const express = require("express");
const {
  getInfo,
  getmarks
} = require("../controllers/studentcontroller");

const router = express.Router();

router.get("/:id", getInfo);
router.get("/report/:id", getmarks);

module.exports = router;
