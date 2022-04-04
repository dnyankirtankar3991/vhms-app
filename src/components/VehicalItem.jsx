import React from "react";
import { Card, CardContent, Badge } from "@mui/material";

export const VehicalItem = ({
  item,
  handleVehicleClick,
  selectedDriver,
  selectedVehicle,
}) => {
  return (
    <React.Fragment>
      <Card className="driveritem" onClick={() => handleVehicleClick(item)}>
        <Badge
          color="success"
          badgeContent={
            selectedVehicle === item
              ? `${selectedDriver.fname} ${selectedDriver.lname}`
              : 0
          }
        >
          <CardContent>{item}</CardContent>
        </Badge>
      </Card>
    </React.Fragment>
  );
};
