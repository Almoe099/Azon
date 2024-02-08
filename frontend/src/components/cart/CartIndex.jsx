import { useDispatch, useSelector } from "react-redux";
import { selectProductsArray } from "../../store/product";
import { useEffect } from "react";
import { fetchCarts, memoizedSelectCarts } from "../../store/cart";
import { NavLink } from "react-router-dom";
import CartShow from "./CartShow";
import loadingPic from "../../pictures/loadingPic.png";
import "./CartIndex.css";
import Footer from "../Navigation/Footer";

const CartIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);
  const carts = useSelector(memoizedSelectCarts);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  let total = 0.0;
  let quantity = 0;

  carts.forEach((item) => {
    products.forEach((product) => {
      if (item.productId === product.id) {
        quantity += item.quantity;
        total += Math.round(item.quantity * product.price);
      }
    });
  });

  let more = false;

  if (quantity > 1) {
    more = true;
  }

  return (
    <>
      <div className="cartIndexContainer">
        <div className="CartPage">
          {carts.length === 0 ? (
            <div className="cartImageContainer">
              <img className="cartImage" src={loadingPic} alt="" />
            </div>
          ) : (
            <p></p>
          )}

          {carts.length === 0 ? (
            <div className="emptyCartContainer">
              <div className="emptyCart">
                <h1 className="cartEmptyH1">Your Azon Cart is empty</h1>

                  <p className="cartEmptyP">
                    Check your Saved for later items below or
                  <NavLink to="/products">
                    <span className="shopLink">
                      continue shopping.
                    </span>
                   </NavLink>
                  </p>
              </div>

              {!user ? (
                <div className="cartButtons">
                  <NavLink to="/login">
                    <button className="emptyCartBtnSignIn">
                      Sign in to your account
                    </button>
                  </NavLink>
                  <NavLink to="/signup">
                    <button className="emptyCartBtnSignUp">Sign up now</button>
                  </NavLink>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          ) : (
            <ul className="CartIndexUl">
              <h1>Your Azon Cart</h1>
              {carts.map((cart, index) => (
                <li className="cartIndexLi" key={`${cart.id}_${index}`}>
                  <CartShow cart={cart} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {quantity ? (
  quantity > 0 && (
    <div className="checkoutContainerBox">
      <span className="freeShipping">
        Your order qualifies for FREE Shipping.
      </span>

      <p className="totalPrice">
        Subtotal ({quantity} {more ? "Items" : "Item"}): ${total}.00
      </p>

      <label className="giftContainer" htmlFor="radio">
        <input
          className="giftRadio"
          type="checkbox"
          value="This order contains a gift"
        />
        <span className="giftSpan">This order contains a gift</span>
      </label>

      {quantity && (
        <NavLink to="/checkout">
          <button type="submit" className="checkoutButton">
            Checkout
          </button>
        </NavLink>
      )}
    </div>
  )
) : (
  <p></p>
)}

      </div>
      <div className="cartFooter">
        <Footer />
      </div>
    </>
  );
};

export default CartIndex;
