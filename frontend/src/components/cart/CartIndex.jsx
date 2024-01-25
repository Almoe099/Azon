import { useDispatch, useSelector } from "react-redux";
import { selectProductsArray } from "../../store/product";
import { useEffect } from "react";
import { fetchCarts, memoizedSelectCarts } from "../../store/cart";
import { NavLink } from "react-router-dom";
import CartShow from "./CartShow";
// import loading from '../../pictures/loading.jpg'
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

  return (
    <div className="cartIndexContainer">

      <div className="CartPage">
        {carts.length === 0 ? (
            
          <div className="cartImageContainer">
            <img
            className="cartImage"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        ) : (
          <p></p>
    )}

        {carts.length === 0 ? (
          <div className="emptyCartContainer">

            <div className="emptyCart">

              <h1 className="cartEmptyH1">Your Azon Cart is empty</h1>

              <NavLink to="/products">
                <p className="cartEmptyP">
                  Check your Saved for later items below or continue shopping.
                </p>
              </NavLink>

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
            {carts.map((cart, index) => (
              <li className="cartIndexLi" key={`${cart.id}_${index}`}>
                <CartShow cart={cart} />
              </li>
            ))}
          </ul>
        )}


      </div>

      
      {quantity && (
        <div className="checkoutContainer">

            <p className="totalPrice">
                Subtotal({quantity}): ${total}.00
            </p>

            <label className="giftContainer" htmlFor="radio">
                This order contains a gift
                <input
                className="giftRadio"
                type="checkbox"
                value="This order contains a gift"
                />
            </label>

            {quantity && (
                <NavLink className="checkoutContainer" to="/checkout">
                <button type="submit" className="checkoutButton">Checkout</button>
                </NavLink>
            )}

        </div>
        )}

        <div className="cartFooter">
          <Footer />
        </div>
    </div>
  );
};

export default CartIndex;
