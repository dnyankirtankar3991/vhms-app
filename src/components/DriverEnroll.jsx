import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";

export const DriverEnroll = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [fullname, setFullname] = useState("");
  const [hno, setHno] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [dl, setDl] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [idproofs, setIdproofs] = useState("");

  useEffect(() => {
    setFullname(`${fname} ${mname} ${lname}`);
    setAddress(`${hno}, ${area}, ${city} - ${pin}. `);
    setIdproofs(`${dl} : ${aadhar} : ${pan}`);
  }, [fname, lname, mname, hno, area, city, pin, dl, aadhar, pan]);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={4}>
          <TextField
            label="First Name"
            variant="standard"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Middle Name"
            value={mname}
            variant="standard"
            onChange={(e) => setMname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name"
            variant="standard"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <TextField
            label="H.No."
            variant="standard"
            value={hno}
            onChange={(e) => setHno(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Area"
            variant="standard"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="City"
            variant="standard"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Pincode"
            variant="standard"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <TextField
            variant="standard"
            label="Driving Licence"
            value={dl}
            onChange={(e) => setDl(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            label="Aadhar Card"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="standard"
            label="PAN Card"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />
        </Grid>
      </Grid>
      <h3>{fullname}</h3>
      <p>{address}</p>
      <p>{idproofs}</p>
    </React.Fragment>
  );
};
