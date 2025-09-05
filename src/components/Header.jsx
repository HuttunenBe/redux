import { NavLink } from 'react-router-dom';
import UserPage from '../pages/UserPage';


const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="/CartPage">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/ProductsPage">Products</NavLink>
        </li>
           <li>
          <NavLink to="/UserPage">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
