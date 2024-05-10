import { fetchReviews, selectReviewArray } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import ReviewShow from "./ReviewShow";
import { useEffect } from "react";
import "./ReviewIndex.css";

const ReviewIndex = ({ product }) => {
  const reviews = useSelector(selectReviewArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);


  return (
    <div className="reviewIndexPageMain">
      {reviews.map((review, index) => {
        if (review.productId == product.id) {
          return (
            <div className="reviewIndexDiv" key={`review_${review.id}_${index}`}>
              <ReviewShow review={review}/>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ReviewIndex;