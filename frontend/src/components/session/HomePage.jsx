import React from "react";
import "./HomePage.css";
import azonImage from './azon.png'
import searchIcon from './search-symbol.png'
// import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">

      <img className="logo" src={azonImage} />
      <div className="searchBar">
        <input type="text" className="inputSearch" />
        < searchIcon className='searchIcon'/>
      </div>

      <div className="nav">

        <div className="option">
          <span className="optionLineOne">Hello Guest</span>
          <span className="optionLineTwo">Sign In</span>
        </div>

        <div className="option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>

        <div className="option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>

        <div className="optionBasket">
          {/* <ShoppingBasketIcon /> */}
          <span className="optionLineTwo header__basketCount">0</span>
        </div>

      </div>

    </div>
  );
}

export default Header;
