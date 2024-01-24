import { useDispatch, useSelector } from 'react-redux'
import { selectProductsArray } from '../../store/product'
import { useEffect } from 'react'
import { fetchCarts, memoizedSelectCarts } from '../../store/cart'
import { NavLink } from 'react-router-dom'
import CartShow from './CartShow'
import loading from '../../pictures/loading.jpg'
import './CartIndex.css'
import Footer from '../Navigation/Footer'


const CartIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductsArray)
    const carts = useSelector(memoizedSelectCarts)
    const user = useSelector(state => state.session.user);
    
    // console.log(products)
    // console.log(carts)

    useEffect(() => {
        dispatch(fetchCarts())
    }, [dispatch]);

    let total = 0.00;
    let quantity = 0;
    // console.log(total)
    // console.log(quantity)

    carts.forEach(item => {
        // console.log(item)
      products.forEach(product => {
        // console.log(product)
        if (item.productId === product.id) {
          quantity += item.quantity;
          total += Math.round(item.quantity * product.price);
        }
      });
    });
    // console.log(total)
    // console.log(quantity)

    return (
        <>
    <div className='CartPageDiv'>
      {carts.length === 0 ? 
        <div className='cartImgDiv'>
          <img src={loading} alt="" />
        </div>
        : 
        <p></p>
      }
      <br />
      <br />
      <br />
      {carts.length === 0 ? (
        <div className='emptyCartDiv'>

          <div className='emptyCartDealsDiv'>
            <h1 className='emptyCartH1'>Your QuantumShop Cart is empty</h1>
            <NavLink to='/products' >
              <p className='emptyCartP'>Shop today&apos;s deals</p>
            </NavLink>
          </div>
          {!user ? 
            <div className='cartSessionBtns'>
              <NavLink to='/login'>
                <button className='emptyCartBtnSignIn'>Sign in to your account</button> 
              </NavLink>
              <NavLink to='/signup'>
                <button className='emptyCartBtnSignUp'>Sign up now</button>  
              </NavLink>
              
            </div>
            : <p></p>
          }
        </div>
      ) : (
        <ul className='CartIndexUl'>
          {carts.map((cart, index) => (
            <li className='cartIndexLi' key={`${cart.id}_${index}`}>
              <CartShow cart={cart} />
            </li>
          ))}
        </ul>
      )}

      <div className='checkoutSideDiv'>
        <p className='totalPriceP'>Subtotal({quantity}): ${total}.00</p>
        <label className='giftOrderLabel' htmlFor="radio">This order contains a gift
          <input className='giftRadio' type="checkbox" value="This order contains a gift"/>
        </label>
        { quantity ? 
          <NavLink className='checkoutBtn' to='/checkout'>Checkout</NavLink>
          :
          <NavLink className='checkoutBtn' to=''>Checkout</NavLink>
        }
      </div>
      <div className='cartFooter'>
        <Footer />
      </div>
    </div>
      </>
)


}

export default CartIndex