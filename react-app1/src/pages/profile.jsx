import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";


const useStyles = makeStyles({
  table: {  
    width:650,
  },
});

function App() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/student/${localStorage.user}`).then((detail) => {
      setInfo(detail.data);
    });
  }, []);

  return (
    <div className="profile">
      <div className='table-container'>
      <h1>Profile</h1>
      <Table  className={classes.table} >      
          <TableRow  className='row-style'>
              <TableCell variant="head">Full Name</TableCell>
              <TableCell>{info["Name"]}</TableCell>
          </TableRow>    
          <TableRow  className='row-style'>
              <TableCell variant="head">Enrollment Number</TableCell>
              <TableCell>{info["Enrollement Number"]}</TableCell>
          </TableRow>
          <TableRow  className='row-style'>
              <TableCell variant="head">Date of Birth</TableCell>
              <TableCell>{info["Date of Birth"]}</TableCell>
          </TableRow> 
          <TableRow  className='row-style'>
              <TableCell variant="head">Email</TableCell>
              <TableCell>{info["Gmail"]}</TableCell>
          </TableRow>      
          <TableRow  className='row-style'>
              <TableCell variant="head">Phone Number</TableCell>
              <TableCell>{info[" Phone Number"]}</TableCell>
          </TableRow>
          <TableRow  className='row-style'>
              <TableCell variant="head">Batch Year</TableCell>
              <TableCell>{info["Batch Year"]}</TableCell>
          </TableRow>
      </Table>

      </div>
    </div>
  );
}

export default App;
