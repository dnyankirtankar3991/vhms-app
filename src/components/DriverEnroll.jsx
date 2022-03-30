import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

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

  const handleRemove = () => {
    setFname("");
    setLname("");
    setMname("");
    setHno("");
    setArea("");
    setCity("");
    setPin("");
    setDl("");
    setAadhar("");
    setPan("");
  };

  useEffect(() => {
    setFullname(`${fname} ${mname} ${lname}`);
    setAddress(`${hno}, ${area}, ${city} - ${pin}. `);
    setIdproofs(`${dl} : ${aadhar} : ${pan}`);
  }, [fname, lname, mname, hno, area, city, pin, dl, aadhar, pan]);
  return (
    <Card>
      <CardContent>
        <React.Fragment>
          <Grid container>
            <Grid item xs={4}>
              <TextField
                label="First Name"
                variant="standard"
                value={fname}
                required
                onChange={(e) =>
                  setFname(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase()
                  )
                }
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
                required
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
                required
                value={dl}
                onChange={(e) => setDl(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="standard"
                label="Aadhar Card"
                required
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
          <br />
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained">Save</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleRemove}>
                Cancel
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          {fname !== "" && lname !== "" && <h3>{fullname}</h3>}
          {city !== "" && <p>{address}</p>}
          {dl !== "" && aadhar !== "" && <p>{idproofs}</p>}
        </React.Fragment>
      </CardContent>
    </Card>
  );
};
