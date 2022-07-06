const StdCred = require("../models/StdCredential.model.js")
const ProfCred = require("../models/ProfCredential.model.js")
const validateUser = async (req, res)=>{
    try{
      const {userID,password} = req.body
      let role = userID[0]
      console.log(role)
      if(role == 'P'){
        // console.log("====================**%%%%**==================================")
        // console.log(userID)
        // console.log(password)
        // console.log("=======================*$$*===============================")
        
        // const user = await ProfCred.find()
        // if(user){
        //   console.log("user")
        // }
        // else{
        //   console.log("no user")
        // }
        const userLogin = await ProfCred.findOne({UserID:userID,Password:password})
          if (!userLogin){
            // console.log("User not found")
            res.status(400).json({message:"Incorrect Credentials"})
          }
          else {
            // console.log("User found")
            // console.log(userLogin)
            res.json({message:"Login Successfull",user:userLogin["UserID"]})
          }
        }
      else{
        // console.log("====================00000==================================")
        // console.log(userID)
        // console.log(password)
        // console.log("=======================000000===============================")
        const userLogin = await StdCred.findOne({UserID:userID,Password:password})
        if (!userLogin){
          // console.log("User not found")
          res.status(400).json({message:"Incorrect Credentials"})
        }
        else {
          // console.log(userLogin)
            res.json({message:"Login Successfull",user:userLogin["UserID"]})
        }
      }
    }
    catch(err){
      console.log(err);
    }
}
module.exports = {validateUser}