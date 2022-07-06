const express = require("express");
const {
  getInfo,
  getStudents,
  getEnrolledStudents,
  addStudent,
  deleteStudent,
} = require("../controllers/professorController");

const router = express.Router();
router.get("/:id", getInfo);
router.get("/sub/:sub", getStudents);
router.get("/enrolled/:sub", getEnrolledStudents);
router.post("/addStudent/:sub", addStudent);
router.delete("/CSE/:id", deleteStudent);
router.delete("/ECE/:id", deleteStudent);
router.delete("/EEE/:id", deleteStudent);
router.delete("/MEC/:id", deleteStudent);
router.delete("/CIV/:id", deleteStudent);

module.exports = router;
