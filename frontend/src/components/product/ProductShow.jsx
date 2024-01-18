import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, selectProduct } from '../../store/product';

import './ProductShow.css'
import { useEffect } from 'react';

const ProductShow = () => {

    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(selectProduct(productId))


    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId]);

    return (
        
    )


}

export default ProductShow