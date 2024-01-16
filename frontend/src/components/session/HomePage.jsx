import React from "react";
import { useSelector } from "react-redux";
import "./HomePage.css";
import azonImage from './azon.png'
import SearchIcon from './search.png'
import CartIcon from './cart.png'
import flag from './usaFlag.png'
import * as sessionActions from "../../store/session";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header() {

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
      <span className="optionLineOne">Hello, sign in </span>
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
