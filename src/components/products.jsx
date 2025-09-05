/*import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { addToCart } from '../store/cartSlice'; // make sure the path is correct
import { Card, CardContent, Typography, Button } from '@mui/material';

const Products = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <p>Total Products: {products.length}</p>
      {products.map(product => (
        <Card key={product.id} style={{ margin: '10px', padding: '10px' }}>
          <CardContent>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body1">${product.price}</Typography>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(addToCart(product))}
            style={{ margin: '10px' }}
          >
            Add to cart
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Products;
*/