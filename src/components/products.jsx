import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchProducts } from "../store/productSlice";
import { addToCart } from "../store/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Products ({products.length})
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <Card>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  objectFit: "cover",
                  maxHeight: "100px",
                  width: "100%",
                }}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(addToCart(product))}
                  style={{ marginTop: "10px" }}
                >
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
