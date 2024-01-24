import { selectProduct } from '../../store/product';
import './CartShow.css'
import { useSelector, useDispatch } from 'react-redux'


const CartShow = ( {cart} ) => {

    console.log(cart)
    // const user = useSelector((state) => state.session.user);
    // const dispatch = useDispatch();
    const product = useSelector(selectProduct(cart.productId))



    if (!product) {
        return <div>Loading...</div>;
    }

    // return (
    //     <h1>{product}</h1>
    // )

}

export default CartShow