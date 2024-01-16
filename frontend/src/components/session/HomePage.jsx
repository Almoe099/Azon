import { Link } from "react-router-dom";
import azonImage from './azon.png'
import SearchIcon from './search.png'
import CartIcon from './cart.png'
import flag from './usaFlag.png'
import "./HomePage.css";
import { useSelector } from "react-redux";

function Header() {

  const user = useSelector(state => state.session.user);

    return (
    <div className="header">

      <img className="logo" src={azonImage} />
      <div className="searchBar">
        <input type="text" className="inputSearch" placeholder="Search Azon" />
        <img className="searchIcon" src={SearchIcon} id="search"/>
      </div>

      <div className="nav">

        <div className="optionIcon">
          <img className="icon" src={flag} />
        </div>

        <div className="option">
      <span className="optionLineOne">Hello, {!user ? 'sign in' : user.name}</span>
      <div className="account-dropDown">
        <span className="optionLineTwo">Accounts & Lists</span>
        <div className="dropdown-content">
          <Link to={'/login'}>
            <button type="submit" className="signin-button">
              Sign in
            </button>
          </Link>
          <label className="new-customer-label">
            New customer? <Link to={'/signup'}>Start here.</Link>
          </label>
        </div>
      </div>
    </div>

        <div className="option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>

        <div className="optionIcon">
        <img className="icon" src={CartIcon} />
          <span className="cartCount">0</span>
        </div>

      </div>

    </div>
  );
}

export default Header;
