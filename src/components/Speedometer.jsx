import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";

export const Speedometer = () => {
  const [speed, setSpeed] = useState(0);
  const [status, setStatus] = useState("lightgray");
  const selectorProd = useSelector((state) => state.productReducer.prodname);
  useEffect(() => {
    if (speed > 5 && speed < 21) {
      setStatus("yellow");
    } else if (speed > 21 && speed < 51) {
      setStatus("green");
    } else if (speed > 50) {
      setStatus("red");
    } else {
      setStatus("lightgray");
    }
  }, [speed]);
  return (
    <Card>
      <CardContent>
        <h1>{selectorProd}</h1>
        <React.Fragment>
          <Grid container>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => setSpeed(speed - 5)}>
                -
              </Button>
            </Grid>
            <Grid item xs={6}>
              <TextField value={speed} variant="outlined"></TextField>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => setSpeed(speed + 5)}>
                +
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div className="signal" style={{ backgroundColor: status }}></div>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </React.Fragment>
      </CardContent>
    </Card>
  );
};
