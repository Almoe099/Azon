import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import azonImage from "../../pictures/azon.png";
import SearchIcon from "../../pictures/search.png";
import CartIcon from "../../pictures/cart.png";
import orangeGithub from "../../pictures/orangeGithub.png";
import orangeLinkedin from "../../pictures/orangeLinkedin.png";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Navigation.css';
import { memoizedSelectCarts } from "../../store/cart";

function Navigation() {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector(memoizedSelectCarts);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    navigate('/')
  };

  const totalQuantity = carts.reduce((total, item) => total + item.quantity, 0);

  const handleSubmit = (e) => {
    if (user) {
      // If there is a user, perform logout
      logout(e);
    } else {
      // If there is no user, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <div className="header">
      <div className="headerRow1">
        <Link to={'/'}>
            <img className="logo" src={azonImage} />
        </Link>

        <div className="searchBar">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search Azon"
          />

          <img className="searchIcon" src={SearchIcon} id="search" />
        </div>

        <div className="nav">
          
          <div className="optionIcon">
          <Link to={'https://github.com/Almoe099'}>
            <img className="icon" src={orangeLinkedin} />
        </Link>
          </div>

          <div className="optionIcon">
          <Link to={'https://github.com/Almoe099'}>
            <img className="icon" src={orangeGithub} />
        </Link>
          </div>

          <div className="option">
            <span className="optionLineOne">
              Hello, {!user ? "sign in" : user.name}
            </span>
            <div className="account-dropDown">
              <span className="optionLineTwo">Accounts & Lists</span>
              <div className="dropdown-content">
                <Link to={user ? '/' : '/login'}>
                  <button type="submit" className="signin-button" onClick={handleSubmit}>
                  {!user ? "Sign in" : "Sign out"}
                  </button>
                </Link>
                <label className="new-customer-label">
                  {!user ? "New customer?" : ""}<Link to={"/signup"}>{!user ? "Start here." : ""}</Link>
                </label>
              </div>
            </div>
          </div>

          <div className="option">
            <span className="optionLineOne">Returns</span>
            <span className="optionLineTwo">& Orders</span>
          </div>

          <div className="optionIcon">
            <Link to={'/cart'}>
              <img className="icon" src={CartIcon} />
            </Link>
            <span className="cartCount">{totalQuantity}</span>
          </div>
        </div>
      </div>

      <div className="headerRow2">
        <div className="categories">
          <div className="optionCategory">Best Sellers</div>
          <div className="optionCategory">New Releases</div>
          <div className="optionCategory">Today&apos;s Deals</div>
          <div className="optionCategory">Prime</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;