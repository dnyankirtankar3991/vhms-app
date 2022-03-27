import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { Speedometer } from "./Speedometer";

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Speedometer />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>PDAC JAN 22</CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>PDAC Mar 22</CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>PDAC May 22</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
