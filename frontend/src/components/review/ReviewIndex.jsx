import { useDispatch, useSelector } from "react-redux"
import { Fetchreviews } from "../../store/review"
import { useEffect } from "react"
import ReviewShow from "./ReviewShow"
import { useParams } from "react-router-dom"


const ReviewIndex = ({product}) => {

    const reviews = useSelector(state => Object.values(state?.review|| {}))
    const dispatch = useDispatch()
    const {productId} = useParams()

    useEffect(() => {
        dispatch(Fetchreviews())
    },[dispatch])

    return (
        <div>
            {reviews.reverse().filter(el => el.product_id == productId).map((review) => (
                <ReviewShow key={review?.id} review ={review} product={product}/>
            ))}
        </div>
    )

}

export default ReviewIndex