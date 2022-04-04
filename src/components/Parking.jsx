import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { DriverItem } from "./DriverItem";
import { VehicalItem } from "./VehicalItem";

export const Parking = ({ driverdata, vehdata }) => {
  const [selectedDriver, setSelectedDriver] = useState(driverdata[0]);
  const [selectedVehicle, setSelectedVehicle] = useState(vehdata[0]);
  const handleDriverClick = (item) => {
    setSelectedDriver(item);
  };
  const handleVehicleClick = (item) => {
    setSelectedVehicle(item);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={5}>
          {driverdata.map((item) => (
            <DriverItem
              item={item}
              handleDriverClick={handleDriverClick}
              selectedDriver={selectedDriver}
              selectedVehicle={selectedVehicle}
            />
          ))}
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Allocate</Button>
        </Grid>
        <Grid item xs={5}>
          {vehdata.map((item) => (
            <VehicalItem
              item={item}
              selectedDriver={selectedDriver}
              selectedVehicle={selectedVehicle}
              handleVehicleClick={handleVehicleClick}
            />
          ))}
        </Grid>
      </Grid>
      <br />
      {selectedDriver && (
        <h1>{`${selectedDriver.fname} ${selectedDriver.lname}`}</h1>
      )}
      <h1> {selectedVehicle}</h1>
    </React.Fragment>
  );
};
