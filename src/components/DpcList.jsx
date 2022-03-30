import React, { useState, useEffect } from "react";
import { DpcItem } from "./DpcItem";

export const DpcList = ({ driverdata }) => {
  const [data, setData] = useState([...driverdata]);
  useEffect(() => {
    setData([...driverdata]);
  }, [driverdata]);
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <DpcItem key={index} item={item} />
      ))}
    </React.Fragment>
  );
};
