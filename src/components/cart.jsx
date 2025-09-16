// Import hooks from react-redux to interact with the Redux store
import { useSelector, useDispatch } from "react-redux";

// Import UI components from Material-UI (MUI) for styling
import { Card, CardContent, Typography, Button } from "@mui/material";

// Import actions from your Redux cart slice
import { removeFromCart, clearCart } from "../store/cartSlice"; // You can combine these imports into one line

// Define the Cart component
const Cart = () => {
  // useSelector is used to access Redux state
  // Here, we are getting the 'cart' array from the cart slice of the state
  const cart = useSelector((state) => state.cart.cart);

  // useDispatch returns a function that lets us dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <div>
      {/* Button to clear all items from the cart */}
      <Button
        variant="contained" // MUI button style
        color="secondary"   // MUI button color
        onClick={() => dispatch(clearCart())} // Dispatch the clearCart action when clicked
        style={{ marginBottom: "20px" }} // Add some spacing below the button
        disabled={cart.length === 0} // Disable button if the cart is empty
      >
        Clear Cart
      </Button>

      {/* Display total number of items in the cart */}
      <p>Cart: {cart.length} items</p>

      {/* Map over the cart array to display each item */}
      {cart.map((item) => (
        <Card key={item.id} style={{ margin: "10px", padding: "10px" }}>
          <CardContent>
            {/* Display item title */}
            <Typography variant="h6">{item.title}</Typography>

            {/* Display item price */}
            <Typography variant="body1">${item.price}</Typography>
          </CardContent>

          {/* Button to remove individual item from the cart */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(removeFromCart(item))} // Dispatch removeFromCart action with the current item
            style={{ margin: "10px" }}
          >
            Remove
          </Button>
        </Card>
      ))}
    </div>
  );
};

// Export the Cart component so it can be used in other parts of the app
export default Cart;
