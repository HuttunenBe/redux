import './App.css';
import Button from '@mui/material/Button';
/*import Products from './components/products';*/
import Users from './components/users';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Header from './components/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import UserPage from './pages/UserPage.jsx';






function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/ProductsPage" element={<ProductsPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/UserPage" element={<UserPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
