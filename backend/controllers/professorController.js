const { cseModel, eceModel, eeeModel, mecModel, civModel } = require("../models/marksModel");
const Enrolledstd = require("../models/enrolledstudent.model.js");
const Student = require("../models/student.model.js");
const Professor = require("../models/professor.model.js");

const getInfo = async (req, res) => {
  try{
    const userID = req.params.id
    // console.log(userID)
    Professor.findOne({"Professor Code":userID})
      .then((exist) => {
        if (exist){res.json(exist)}
        else{res.json({message:"Sorry... Something Went Wrong when Fetching the data"})}
      })
      .catch((err)=>{console.log(err)})
  }
  catch(err){
    console.log("Error Loading Professor Information");
    console.log(err.stack);
  }
};


const getStudents = async (req, res) => {
  try {
    const sub = req.params.sub;
    let allStudents;
    // console.log(sub);
    if(sub === "CSE"){
      allStudents = await cseModel.find();
    }
    else if(sub ==="ECE"){
      allStudents = await eceModel.find();
    }
    else if(sub === "EEE"){
      allStudents = await eeeModel.find();
    }
    else if(sub === "MEC"){
      allStudents = await mecModel.find();
    }
    else if(sub === "CIV"){
      allStudents = await civModel.find();
    }
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getEnrolledStudents = async (req, res)=>{
  try{
    const subject = req.params.sub;
  
    const studentsEnrollList = await Enrolledstd.find({"Department":subject})
    // console.log(studentsEnrollList["Students enrolled"])
    if (!studentsEnrollList){
      console.log("Error loading students list")
    }
    else {
      console.log(studentsEnrollList["Students enrolled"])
      const studentsList = await Student.find({"Enrollment Number":{$in : studentsEnrollList["Students enrolled"]}}).select({"Enrollement Number":1,"Name":1,"_id":0})
      // console.log(studentsList)
      res.json({message:"Login Successfull",data:studentsList})
    }
  }
  catch(err){
    console.log(err)
  }
}


const addStudent = async (req, res) => {
  // console.log("I am here");
  // console.log(req.body);
  const student = req.body;
  const sub = req.params.sub;
  // console.log(sub);
  let newStudent;
  if(sub === "CSE"){
    newStudent = new cseModel (student)
  }
  else if(sub === "ECE"){
    newStudent = new eceModel (student)
  }
  else if(sub === "EEE"){
    newStudent = new eeeModel (student)
  }
  else if(sub === "MEC"){
    newStudent = new mecModel (student)
  }
  else if(sub === "CIV"){
    newStudent = new civModel (student)
  }

  try { 
    await newStudent.save();
    res.status(201).json(newStudent);
  }
  catch (err) {
    res.status(409).json({ message: err.message })
  }
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  let url = req.url
  url = url.split("/")
  const sub = url[1]
  // console.log("............");
  // console.log(sub);
  // console.log(id)
  // console.log("............");

  try { 
    if(sub === "CSE"){
      await cseModel.findByIdAndRemove(id).exec();
    }
    else if(sub === "ECE"){
      await eceModel.findByIdAndRemove(id).exec();
    }
    else if(sub === "EEE"){
      await eeeModel.findByIdAndRemove(id).exec();
    }
    else if(sub === "MEC"){
      await mecModel.findByIdAndRemove(id).exec();
    }
    else if(sub === "CIV"){
      await civModel.findByIdAndRemove(id).exec();
    }
    res.send("Successfully deleted");
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = {getInfo, getStudents, getEnrolledStudents, addStudent, deleteStudent };
