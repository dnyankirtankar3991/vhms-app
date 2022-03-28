import React from "react";
import { Grid, Button, Avatar, Rating } from "@mui/material";

export const DpcItem = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Grid container>
            <Grid item xs={10}>
              <h4>Ganesh Rao Patil</h4>
            </Grid>
            <Grid item xs={2}>
              <Avatar alt="Ganesh Rao Patil" src="images/1.jpg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          Local Drive <Rating value={4} />
        </Grid>
        <Grid item xs={12}>
          Long Drive <Rating value={3} />
        </Grid>
      </Grid>
      <br />
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Button variant="contained">Book</Button>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained">Report</Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  );
};
