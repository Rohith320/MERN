import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddStudent() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    regId: "",
    Intmark: "",
    Extmark: "",
  });
  const createStudent = (sub) => {
    axios.post(`http://localhost:5000/professor/addStudent/${sub}`, student).then(()=>{
      window.location.reload(false);
    })
  };
  return (
    <>
      <h3>Add Student Marks</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Reg. Id"
          value={student.regId}
          onChange={(event) => {
            setStudent({ ...student, regId: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Internal Marks"
          value={student.Intmark}
          onChange={(event) => {
            setStudent({ ...student, Intmark: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="External Marks"
          value={student.Extmark}
          onChange={(event) => {
            setStudent({ ...student, Extmark: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={()=>createStudent(localStorage.dept)}>
          Submit
        </Button>
      </form>
    </>
  );
}
