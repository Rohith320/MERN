import React from 'react';

import { Container, Grow, AppBar, Grid } from "@material-ui/core";
import Student from "../showStudent/showStudent.jsx";
import useStyles from "../style.js"
import AddStudent from "../components/createstd/createstd.js";


function Marks() {
    const classes = useStyles();
    return (
      <div className="App">
        <Container max-width="lg">
          {/* <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
              Student Management System
            </Typography>
          </AppBar> */}
          <Grow in>
            <Container>
              <Grid container alignItems="stretch">
                <Grid item xs={12} sm={9}>
                  <AppBar
                    className={classes.appBar}
                    position="static"
                    color="inherit"
                  >
                    <Student />
                  </AppBar>
                </Grid>
                <Grid item xs={12} sm={4}>
                <AppBar
                    className={classes.appBar}
                    position="static"
                    color="inherit"
                  >
                    <AddStudent />
                  </AppBar>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    );
  }
  
  export default Marks;
  
  