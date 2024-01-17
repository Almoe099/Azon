import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';

const ProductList = () => {
    const products = useSelector(state => state.products);
    console.log(products);

    return (
        <>
            <h1>All Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductDetails product={product} />
                    </li>
                ))}
            </ul>
        </>
    );
}


export default ProductList