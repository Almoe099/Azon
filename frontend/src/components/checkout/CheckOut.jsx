import { useDispatch, useSelector } from "react-redux"
import { deleteCart, memoizedSelectCarts } from "../../store/cart";
import { useEffect } from "react";
import Footer from "../Navigation/Footer";
import './CheckOut.css'


const Checkout = () => {
    const dispatch = useDispatch();
    const carts = useSelector(memoizedSelectCarts);

    useEffect(() => {
        carts.forEach(cart => {
          dispatch(deleteCart(cart.id));
        });
    }, [dispatch, carts]);

    return (
        <div className="checkoutPage">
          <div className="checkoutContainer">
            <h1 className="orderPlaced">Thank you for placing an order</h1>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
    );
}

export default Checkout