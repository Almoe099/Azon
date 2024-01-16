import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import azonImage from "../../pictures/azon.png";
import SearchIcon from "../../pictures/search.png";
import CartIcon from "../../pictures/cart.png";
import flag from "../../pictures/usaFlag.png";
import "./HomePage.css";

function Header() {
  const user = useSelector((state) => state.session.user);

  return (
    <div className="header">
      <div className="headerRow1">
        <img className="logo" src={azonImage} />
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
            <img className="icon" src={flag} />
          </div>

          <div className="option">
            <span className="optionLineOne">
              Hello, {!user ? "sign in" : user.name}
            </span>
            <div className="account-dropDown">
              <span className="optionLineTwo">Accounts & Lists</span>
              <div className="dropdown-content">
                <Link to={"/login"}>
                  <button type="submit" className="signin-button">
                    Sign in
                  </button>
                </Link>
                <label className="new-customer-label">
                  New customer? <Link to={"/signup"}>Start here.</Link>
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

      <div className="headerRow2">
        <div className="categories">
          <div className="optionCategory">Best Sellers</div>
          <div className="optionCategory">New Releases</div>
          <div className="optionCategory">Today's Deals</div>
          <div className="optionCategory">Prime</div>
        </div>
      </div>
      <img className='background' src="https://m.media-amazon.com/images/I/71pQ0d+gByL._SR1500,300_.jpg" alt="" />
    </div>
  );
}

export default Header;
