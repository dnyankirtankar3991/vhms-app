import React from "react";
import { Card, CardContent } from "@mui/material";

export const VehicalItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card className="driveritem">
        <CardContent>{item}</CardContent>
      </Card>
    </React.Fragment>
  );
};
