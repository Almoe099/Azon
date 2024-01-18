import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, selectProduct } from '../../store/product';
import { useEffect } from 'react';
import './ProductShow.css'

const ProductShow = () => {

    const dispatch = useDispatch();
    const { productId } = useParams();

    console.log(productId)
    
    const product = (selectProduct(productId))
    console.log(product.name)

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId]);


    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='productCardItem'>
            <div className='productImageContainer'>
                <img className="productImage" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="Product Image" />
            </div>
            <div className='productDetailsContainer'>
                <h1 className="productName">{product.name}</h1>
                <h3 className="productPrice">${product.price}</h3>
                <h5 className="productCategory">{product.category}</h5>
                <h5 className="productBrand">{product.brand}</h5>
                <h5 className="productDimensions">{product.dimensions}</h5>
                <h5 className="productWeight">{product.weight}</h5>
                <p className="productDescription">{product.description}</p>
            </div>
            <div className='cartContainer'>
                <h3 className="productPrice">${product.price}</h3>
                <h4 className='Availabilty' >In Stock</h4>
                <button className='cartButton' type="submit">Add to Cart</button>
                <button className='buyButton' type="submit">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductShow