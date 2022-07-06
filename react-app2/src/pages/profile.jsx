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
    axios.get(`http://localhost:5000/professor/${localStorage.user}`).then((detail) => {
      setInfo(detail.data);
      localStorage.setItem("dept",detail.data["Department Code"])
    });
  }, []);

  return (
    <div className="profile">
      <div className='table-container'>
      <h1>Profile</h1>
      <Table  className={classes.table} >      
          <TableRow  className='row-style'>
              <TableCell variant="head">Full Name</TableCell>
              <TableCell>{info["Professor name"]}</TableCell>
          </TableRow>    
          <TableRow  className='row-style'>
              <TableCell variant="head">Email</TableCell>
              <TableCell>{info["Email ID"]}</TableCell>
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Phone Number</TableCell>
              <TableCell>{info["Phone Number"]}</TableCell>
          </TableRow>  
          <TableRow  className='row-style'>
              <TableCell variant="head">Professor Code</TableCell>
              <TableCell>{info["Professor Code"]}</TableCell>
          </TableRow>
          <TableRow  className='row-style'>
              <TableCell variant="head">Department Code</TableCell>
              <TableCell>{info["Department Code"]}</TableCell>
          </TableRow>
          <TableRow  className='row-style'>
              <TableCell variant="head">Subject Code</TableCell>
              <TableCell>{info["Subject Code"]}</TableCell>
          </TableRow>
          <TableRow  className='row-style'>
              <TableCell variant="head">Subject Name</TableCell>
              <TableCell>{info["Subject Name"]}</TableCell>
          </TableRow>
      </Table>

      </div>
    </div>
  );
}

export default App;