import React, { useState, useEffect } from "react";
import { VehicalItem } from "./VehicalItem";
import { TextField, Card, CardContent } from "@mui/material";

export const VehicalList = ({ vehdata }) => {
  const [data, setData] = useState([...vehdata]);
  const [txtSrc, setTxtSrc] = useState("");

  useEffect(() => {
    const filtered = vehdata.filter((item) =>
      item.toUpperCase().includes(txtSrc.toUpperCase())
    );
    setData([...filtered]);
  }, [txtSrc]);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <TextField
            label="Search Vehicle"
            onChange={(e) => setTxtSrc(e.target.value)}
          />
        </CardContent>
      </Card>
      {data.map((item) => (
        <VehicalItem item={item} />
      ))}
    </React.Fragment>
  );
};
