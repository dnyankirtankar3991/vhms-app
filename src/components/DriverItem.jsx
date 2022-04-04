import React from "react";
import { Card, CardContent, Badge } from "@mui/material";
import AccessibleIcon from "@mui/icons-material/Accessible";

export const DriverItem = ({
  item,
  handleDriverClick,
  selectedDriver,
  selectedVehicle,
}) => {
  return (
    <React.Fragment>
      <Card className="driveritem" onClick={() => handleDriverClick(item)}>
        <Badge
          color="secondary"
          badgeContent={
            selectedDriver && selectedDriver.fname === item.fname
              ? selectedVehicle
              : 0
          }
        >
          <CardContent>
            <AccessibleIcon color="success" />
            {`${item.fname} ${item.mname} ${item.lname}`}
          </CardContent>
        </Badge>
      </Card>
    </React.Fragment>
  );
};
