import React, { useState } from "react";
import { DpcItem } from "./DpcItem";

export const DpcList = ({ driverdata }) => {
  const [data, setData] = useState([...driverdata]);
  return (
    <React.Fragment>
      {data.map((item) => (
        <DpcItem item={item} />
      ))}
    </React.Fragment>
  );
};
