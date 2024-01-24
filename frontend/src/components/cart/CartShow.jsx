import { selectProduct } from '../../store/product';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart, updateCart } from '../../store/cart';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CartShow.css'


const CartShow = ( {cart} ) => {

    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cart.quantity);
    const product = useSelector(selectProduct(cart.productId));

    const deleteItem = (e) => {
        e.preventDefault();
        dispatch(deleteCart(cart.id));
    };

    const handleQuantity = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
        
        // Assuming you want to update the cart with the new quantity
        const updatedCart = {
          ...cart,
          quantity: newQuantity,
        };
        dispatch(updateCart(updatedCart));
    };


    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cart-item-container">
      <div className="cart-item-image">
        <img src={product.photoUrl[0]} alt={product.name} />
      </div>
      <div className="cart-item-details">
        <NavLink to={`/products/${product.id}`} className="product-link">
          {product.name}
        </NavLink>
        <div className="cart-item-quantity">
          <label>Quantity:</label>
          <select value={quantity} onChange={handleQuantity}>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="cart-item-price">${product.price * quantity}</div>
        <button className="delete-button" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
    )

}

export default CartShow