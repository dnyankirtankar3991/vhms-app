import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { DpcList } from "./DpcList";
import { DriverList } from "./DriverList";

export const DriverManager = ({ driverdata }) => {
  const [value, setValue] = useState("dpc");
  return (
    <React.Fragment>
      <Tabs value={value} onChange={(e, val) => setValue(val)}>
        <Tab value="dpc" label="DPC" />
        <Tab value="dl" label="Drive List" />
      </Tabs>
      {value === "dpc" && <DpcList driverdata={driverdata} />}
      {value === "dl" && <DriverList driverdata={driverdata} />}
    </React.Fragment>
  );
};
