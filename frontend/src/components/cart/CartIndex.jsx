import CartShow from './CartShow'
import './CartIndex.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductsArray } from '../../store/product'
import { useEffect } from 'react'
import { fetchCarts, memoizedSelectCarts } from '../../store/cart'


const CartIndex = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductsArray)
    const carts = useSelector(memoizedSelectCarts)
    
    console.log(products)
    console.log(carts)

    useEffect(() => {
        dispatch(fetchCarts())
    }, [dispatch]);

    return (
        <h1>Hello</h1>
    )


}

export default CartIndex