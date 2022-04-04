import React, { useState, useEffect } from "react";
import { Tab, Tabs, TextField, Card, CardContent } from "@mui/material";
import { DpcList } from "./DpcList";
import { DriverList } from "./DriverList";
import { DriverEnroll } from "./DriverEnroll";
import { Speedometer } from "./Speedometer";
import { VehicalList } from "./VehicalList";
import { EShop } from "./EShop";
import { Parking } from "./Parking";

export const DriverManager = ({ driverdata, vehdata, addDriver }) => {
  const [value, setValue] = useState("dpc");

  return (
    <React.Fragment>
      <Tabs value={value} onChange={(e, val) => setValue(val)}>
        <Tab value="dpc" label="DPC" />
        <Tab value="dl" label="Driver List" />
        <Tab value="denroll" label="Enrollment" />
        <Tab value="speedo" label="Speedometer" />
        <Tab value="vehlist" label="Vehical List" />
        <Tab value="eshop" label="e-Shop" />
        <Tab value="park" label="Allocation" />
      </Tabs>

      {value === "dpc" && <DpcList driverdata={driverdata} />}
      {value === "dl" && <DriverList driverdata={driverdata} />}
      {value === "denroll" && <DriverEnroll addDriver={addDriver} />}
      {value === "speedo" && <Speedometer />}
      {value === "vehlist" && <VehicalList vehdata={vehdata} />}
      {value === "eshop" && <EShop />}
      {value === "park" && (
        <Parking driverdata={driverdata} vehdata={vehdata} />
      )}
    </React.Fragment>
  );
};
