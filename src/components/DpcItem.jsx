import React, { useState, useEffect } from "react";
import { Grid, Button, Avatar, Rating, Card, CardContent } from "@mui/material";

export const DpcItem = ({ item }) => {
  const [local, setLocal] = useState(2);
  const [long, setLong] = useState(2);
  const [name, setName] = useState("");
  useEffect(() => {
    setLocal(item.local);
    setLong(item.long);
    setName(`${item.fname} ${item.mname} ${item.lname}`);
  }, []);
  return (
    <React.Fragment>
      <Card className="driveritem">
        <CardContent>
          <Grid container>
            <Grid item>
              <Grid container>
                <Grid item xs={10}>
                  <h4>{name}</h4>
                </Grid>
                <Grid item xs={2}>
                  <Avatar alt="Ganesh Rao Patil" src="images/1.jpg" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              Local Drive
              <Rating value={local} onChange={(e, val) => setLocal(val)} />
            </Grid>
            <Grid item xs={12}>
              Long Drive{" "}
              <Rating value={long} onChange={(e, val) => setLong(val)} />
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
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
