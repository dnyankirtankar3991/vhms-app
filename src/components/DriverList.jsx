import React, { useState } from "react";
import { DriverItem } from "./DriverItem";

export const DriverList = ({ driverdata }) => {
  const [data, setData] = useState([...driverdata]);
  return (
    <React.Fragment>
      {data.map((item) => (
        <DriverItem item={item} />
      ))}
    </React.Fragment>
  );
};
