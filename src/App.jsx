// Import main CSS file for styling
import "./App.css";

// Import Button component from Material-UI (MUI)
// You don’t currently use it here, but it’s available for buttons if needed
import Button from "@mui/material/Button";

// Import your Users component (commented Products component is not used here)
// import Products from './components/products';
import Users from "./components/users";

// Import Redux Provider to make the store available to all components
import { Provider } from "react-redux";

// Import the configured Redux store
import store from "./store/store.js";

// Import Header component (likely contains navigation links)
import Header from "./components/Header.jsx";

// Import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages for routing
import CartPage from "./pages/CartPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import UserPage from "./pages/UserPage.jsx";

// Define the main App component
function App() {
  return (
    // Wrap the app in Redux Provider to give access to the store
    <Provider store={store}>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        {/* Render the header/navigation */}
        <Header />

        <div>
          {/* Define routes for different pages */}
          <Routes>
            {/* When URL matches /ProductsPage, render ProductsPage */}
            <Route path="/ProductsPage" element={<ProductsPage />} />

            {/* When URL matches /CartPage, render CartPage */}
            <Route path="/CartPage" element={<CartPage />} />

            {/* When URL matches /UserPage, render UserPage */}
            <Route path="/UserPage" element={<UserPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

// Export the App component for rendering in index.js
export default App;
