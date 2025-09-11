import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { removeFromCart } from '../store/cartSlice'; // assuming you have this action

const Cart = () => {
  const dispatch = useDispatch();
const cart = useSelector(state => state.cart.cart);


  return (
    <div>
      <p>Cart: {cart.length} items</p>
      {cart.map(item => (
        <Card key={item.id} style={{ margin: '10px', padding: '10px' }}>
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1">${item.price}</Typography>
          </CardContent>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(removeFromCart(item))}
            style={{ margin: '10px' }}
          >
            Remove
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
