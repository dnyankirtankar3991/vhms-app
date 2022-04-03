import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Badge,
} from "@mui/material";

export const EShop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const getCategories = async () => {
    const catdata = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategories([...catdata.data, "All"]);
  };
  const getProducts = async () => {
    const proddata = await axios.get("https://fakestoreapi.com/products");
    setProducts([...proddata.data]);
  };
  useEffect(() => {
    if (categories.length > 0) {
      getProducts();
    }
  }, [categories]);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          {categories.map((item) => (
            <Button variant="contained" className="catitem">
              {item}
            </Button>
          ))}
        </CardContent>
      </Card>
      <br />
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item xs={3}>
            <Card className="containeritem">
              <CardContent>
                <h3>
                  {item.title.substring(0, 25)}
                  {item.title.length > 30 && "..."}
                </h3>
                <Badge color="secondary" badgeContent={"$" + item.price}>
                  <img src={item.image} className="imgitem" />
                </Badge>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
