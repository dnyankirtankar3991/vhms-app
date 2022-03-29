import React from "react";
import { Card, CardContent } from "@mui/material";
import AccessibleIcon from "@mui/icons-material/Accessible";

export const DriverItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card className="driveritem">
        <CardContent>
          <AccessibleIcon color="success" />
          {`${item.fname} ${item.mname} ${item.lname}`}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
