import Footer from "../Navigation/Footer";
import './CheckOut.css'


const CheckOutItem = () => {

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

export default CheckOutItem