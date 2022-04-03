import React, { useState, useEffect } from "react";
import { DriverItem } from "./DriverItem";
import { TextField, Card, CardContent } from "@mui/material";

export const DriverList = ({ driverdata }) => {
  const [data, setData] = useState([...driverdata]);
  const [txtSrc, setTxtSrc] = useState("");
  useEffect(() => {
    const filtered = driverdata.filter(
      (item) =>
        item.fname.toUpperCase().includes(txtSrc.toUpperCase()) ||
        item.mname.toUpperCase().includes(txtSrc.toUpperCase()) ||
        item.lname.toUpperCase().includes(txtSrc.toUpperCase())
    );
    setData([...filtered]);
  }, [txtSrc]);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <TextField
            label="Search Driver"
            onChange={(e) => setTxtSrc(e.target.value)}
          />
        </CardContent>
      </Card>
      {data.map((item, index) => (
        <DriverItem key={index} item={item} />
      ))}
    </React.Fragment>
  );
};
