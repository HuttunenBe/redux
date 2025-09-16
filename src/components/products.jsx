// Import MUI components for building the UI
import { Card, CardContent, Grid, Typography, Button } from "@mui/material";

// Import useEffect hook to handle side effects in React
import { useEffect } from "react";

// Import useSelector to read from the Redux store
import { useSelector } from "react-redux";

// Import a custom typed dispatch hook from your project
// This ensures TypeScript knows the types for your Redux actions
import { useAppDispatch } from "../hooks/hooks";

// Import thunk action to fetch products from your API/store
import { fetchProducts } from "../store/productSlice";

// Import action to add products to the cart
import { addToCart } from "../store/cartSlice";

// Define the Products component
const Products = () => {
  // useSelector accesses the Redux store
  // Here, we are getting the array of products from the 'products' slice of state
  const products = useSelector((state) => state.products.products);

  // useAppDispatch returns the Redux dispatch function, typed for TypeScript
  const dispatch = useAppDispatch();

  // useEffect runs a side effect when the component mounts
  // In this case, we dispatch fetchProducts() to load products from the API or store
  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]); // Dependency array ensures this runs only once unless dispatch changes

  return (
    <div>
      {/* Display a header with total number of products */}
      <Typography variant="h5" gutterBottom>
        Products ({products.length})
      </Typography>

      {/* Use MUI Grid to layout products responsively */}
      <Grid container spacing={2}>
        {/* Loop over products and display each in a card */}
        {products.map((product) => (
          <Grid item key={product.id}>
            <Card>
              {/* Display product image */}
              <img
                src={product.image} // URL of the product image
                alt={product.title}  // Accessibility text
                style={{
                  objectFit: "cover", // Ensure image covers container without distortion
                  maxHeight: "100px",  // Limit image height
                  width: "100%",       // Full width of card
                }}
              />
              <CardContent>
                {/* Display product title */}
                <Typography variant="h6">{product.title}</Typography>

                {/* Button to add product to the cart */}
                <Button
                  variant="contained" // MUI button style
                  color="primary"     // MUI button color
                  onClick={() => dispatch(addToCart(product))} // Dispatch action to add this product to the cart
                  style={{ marginTop: "10px" }} // Add spacing above button
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

// Export the Products component for use in other parts of the app
export default Products;
