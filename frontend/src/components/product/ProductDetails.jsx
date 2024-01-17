import { useDispatch } from "react-redux"
import { selectProduct } from "../../store/product"
import { fetchProducts } from "../../store/product"


const ProductDetails = ({product}) => {
    console.log(product)
    const dispatch = useDispatch()

    return (
        <>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
        <h1>{product.category}</h1>
        <h1>{product.brand}</h1>
        </>
    )
}

export default ProductDetails