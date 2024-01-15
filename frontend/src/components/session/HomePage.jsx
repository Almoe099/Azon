import React from "react";
import "./HomePage.css";
import azonImage from './azon.png'
import SearchIcon from './search.png'
import CartIcon from './cart.png'
import flag from './usaFlag.png'

function Header() {
  return (
    <div className="header">

      <img className="logo" src={azonImage} />
      <div className="searchBar">
        <input type="text" className="inputSearch" />
        <img className="searchIcon" src={SearchIcon} />
      </div>

      <div className="nav">

        <div className="option">
        <img className="flag" src={flag} />
        </div>

        <div className="option">
          <span className="optionLineOne">Hello Guest</span>
          <span className="optionLineTwo">Sign In</span>
        </div>

        <div className="option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>

        <div className="optionBasket">
        <img className="cartIcon" src={CartIcon} />
          <span className="optionLineTwo header__basketCount">0</span>
        </div>

      </div>

    </div>
  );
}

export default Header;
