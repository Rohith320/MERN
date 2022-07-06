const { cseModel, eceModel, eeeModel, mecModel, civModel } = require("../models/marksModel")
const Student = require("../models/student.model.js");

const getInfo = async (req,res)=>{
  try{
    const userID = req.params.id
    Student.findOne({"Enrollement Number":userID})
      .then((exist) => {
        if (exist){res.json(exist)}
        else{res.json({message:"Sorry... Something Went Wrong when Fetching the data"})}
      })
      .catch((err)=>{console.log(err)})
  }
  catch(err){
    console.log("Error Loading Student Information");
    console.log(err.stack);
  }
}


const getmarks = async (req, res) => {
 
  const id = req.params.id;

  let marks= [];
  let index = 0
  try {
   let mark1 = await cseModel.findOne({"regId":id})
    if (mark1 != null){
      let subject_mark = {}
      subject_mark["subject"]="Computer Networks"
      subject_mark["Intmark"]=mark1.Intmark
      subject_mark["Extmark"]=mark1.Extmark
      marks[index] = subject_mark
      index++
      
    }
    let mark2 = await eceModel.findOne({"regId":id})
    if (mark2 != null){
      let subject_mark = {}
      subject_mark["subject"]="Heat and Thermodynamics"
      subject_mark["Intmark"]=mark2.Intmark
      subject_mark["Extmark"]=mark2.Extmark
      marks[index] = subject_mark
      index++

    }
    let mark3 = await eeeModel.findOne({"regId":id})
    if (mark3 != null){
      let subject_mark = {}
      subject_mark["subject"]="Fundamentals of Electrical Machines"
      subject_mark["Intmark"]=mark3.Intmark
      subject_mark["Extmark"]=mark3.Extmark
      marks[index] = subject_mark
      index++
    }
    let mark4 = await civModel.findOne({"regId":id})
    if (mark4 != null){
      let subject_mark = {}
      subject_mark["subject"]="Structural Analysis"
      subject_mark["Intmark"]=mark4.Intmark
      subject_mark["Extmark"]=mark4.Extmark
      marks[index] = subject_mark
      index++
    }
    let mark5 = await mecModel.findOne({"regId":id})
    if (mark5 != null){
      let subject_mark = {}
      subject_mark["subject"]="Fluid mechanics"
      subject_mark["Intmark"]=mark5.Intmark
      subject_mark["Extmark"]=mark5.Extmark
      marks[index] = subject_mark
      index++
    }
    res.json({marks:marks})
    // console.log(marks)
  }
  catch(err){
    console.log(err)
  }
};

module.exports = { getInfo, getmarks };
