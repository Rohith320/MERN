import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowStudent() {
  const classes = useStyles();
  const [studentList, showStudentList] = useState([]);
  let log
  try{
  log = localStorage.getItem("user");
  }catch(e){
    console.log(e);
    log = false
  }

  const deleteStudent = (sub,id)=>{
    axios.delete(`http://localhost:5000/professor/${sub}/${id}`).then(()=>{
      window.location.reload(false);
    })
  }

  useEffect(() => {
    console.log(localStorage.dept);
    axios.get(`http://localhost:5000/professor/sub/${localStorage.dept}`).then((allStudents) => {
      showStudentList(allStudents.data);
    });
  }, []);

  return (
    <>
      <h1>All Students Marks List</h1>
      { log?
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" fontWeight="bold">
                RegId
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Internal Marks
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                External Marks
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Total Marks
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {studentList.map((student, key) => (
              <TableRow key={student.key}>
                <TableCell align="center" component="th" scope="row">
                  {student.regId}
                </TableCell>
                <TableCell align="center">{student.Intmark}</TableCell>
                <TableCell align="center">{student.Extmark}</TableCell>
                <TableCell align="center">{student.Intmark+student.Extmark}</TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete" className={classes.margin}>
                    <delete onClick={()=>deleteStudent(localStorage.dept,student._id)}>Delete</delete>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      : <h1>You are not logged in</h1>}
    </>
  );
}
