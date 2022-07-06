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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowStudent() {
  const classes = useStyles();
  const [studentList, showStudentList] = useState([]);

  useEffect(() => {
    if (localStorage.user) {
      axios.get(`http://localhost:5000/professor/enrolled/${localStorage.dept}`).then((allStudents) => {
        showStudentList(allStudents.data.data);
        console.log(allStudents.data.data);
      })
    };
    }, []);

  return (
    <>
      <h1>Enrolled Students</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" fontWeight="bold">
                Registration Number
              </TableCell>
              <TableCell align="center" fontWeight="bold">
                Student Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((student, key) => (
              <TableRow key={student.key}>
                <TableCell align="center" component="th" scope="row">
                  {student["Enrollement Number"]}
                </TableCell>
                <TableCell align="center">{student.Name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
