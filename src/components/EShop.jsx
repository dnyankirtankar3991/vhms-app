import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Badge,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export const EShop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtProducts, setFiltProducts] = useState([]);
  const [cartdata, setCartdata] = useState([]);
  const [selectedCat, setSelectedCat] = useState("All");
  const [flg, setFlg] = useState(false);
  const dispatch = useDispatch();
  const selectorCategory = useSelector(
    (state) => state.productReducer.prodname
  );
  const selectorProds = useSelector((state) => state.productReducer.products);
  const selectorCatgs = useSelector((state) => state.productReducer.categories);
  const getCategories = async () => {
    if (selectorCatgs.length > 0) {
      setCategories([...selectorCatgs]);
    } else {
      const catdata = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories([...catdata.data, "All"]);
      dispatch({
        type: "SET_CATEGORIES",
        data: [...catdata.data, "All"],
      });
    }
  };
  const getProducts = async () => {
    if (selectorProds.length > 0) {
      setProducts([...selectorProds]);
      setFiltProducts([...selectorProds]);
    } else {
      const proddata = await axios.get("https://fakestoreapi.com/products");
      setProducts([...proddata.data]);
      setFiltProducts([...proddata.data]);
      dispatch({
        type: "SET_PRODUCTS",
        data: [...proddata.data],
      });
    }
  };
  const handleAddToCart = (item) => {
    setCartdata([item, ...cartdata]);
  };
  useEffect(() => {
    if (selectedCat === "All") {
      setFiltProducts([...products]);
    } else {
      const filtered = products.filter(
        (item) => item.category.toUpperCase() === selectedCat.toUpperCase()
      );
      setFiltProducts([...filtered]);
    }
    dispatch({
      type: "SET_NAME",
      data: selectedCat,
    });
  }, [selectedCat]);
  useEffect(() => {
    if (categories.length > 0) {
      getProducts();
    }
  }, [categories]);
  useEffect(() => {
    if (selectorCategory !== "" && !flg) {
      setSelectedCat(selectorCategory);
      setFlg(true);
    }
  }, [selectorCategory]);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <React.Fragment>
      <Card>
        <CardContent className="submenu">
          {categories.map((item) => (
            <Button
              variant="contained"
              className="catitem"
              onClick={() => setSelectedCat(item)}
            >
              {item}
            </Button>
          ))}
          <TextField label="Search" variant="outlined" className="searchbox" />
          <Badge color="success" badgeContent={cartdata.length}>
            <ShoppingCartOutlinedIcon className="carting" />
          </Badge>
        </CardContent>
      </Card>
      <br />
      <Grid container spacing={3}>
        {filtProducts.map((item) => (
          <Grid item xs={3}>
            <Card className="containeritem">
              <CardContent>
                <h3>
                  {item.title.substring(0, 25)}
                  {item.title.length > 30 && "..."}
                </h3>
                <AddShoppingCartOutlinedIcon
                  className="cartingadd"
                  onClick={() => handleAddToCart(item)}
                />
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
