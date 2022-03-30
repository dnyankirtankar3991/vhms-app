import React, { useState, useEffect } from "react";
import { DpcItem } from "./DpcItem";
import { TextField, Card, CardContent } from "@mui/material";

export const DpcList = ({ driverdata }) => {
  const [data, setData] = useState([]);
  const [txtSrc, setTxtSrc] = useState("");

  useEffect(() => {
    const filtered = driverdata.filter((item) =>
      item.fname.toUpperCase().includes(txtSrc.toUpperCase())
    );
    setData([...filtered]);
  }, [txtSrc]);

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <TextField
            label="Search DPC"
            onChange={(e) => setTxtSrc(e.target.value)}
          />
        </CardContent>
      </Card>
      {data.map((item, index) => (
        <DpcItem key={index} item={item} />
      ))}
    </React.Fragment>
  );
};
