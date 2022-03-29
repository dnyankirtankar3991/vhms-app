import React, { useState } from "react";
import { Grid, Button, Card, CardContent, Tabs, Tab } from "@mui/material";
import { Speedometer } from "./Speedometer";
import { DriverEnroll } from "./DriverEnroll";
import { DpcItem } from "./DpcItem";
import { DriverItem } from "./DriverItem";
import { DriverManager } from "./DriverManager";

export const Home = () => {
  const [data, setData] = useState([
    {
      fname: "Ganesh",
      mname: "Shashidhar",
      lname: "Patil",
      local: 1,
      long: 4,
    },
    {
      fname: "Javed",
      mname: "Jabbar",
      lname: "Shaikh",
      local: 5,
      long: 2,
    },
    {
      fname: "Sam",
      mname: "Datta",
      lname: "Shivraj",
      local: 3,
      long: 3,
    },
  ]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DriverManager driverdata={data} />
      </Grid>
      <Grid item xs={8}>
        <Card>
          <CardContent>
            <DriverEnroll />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Speedometer />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
