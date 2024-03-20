import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import ReviewShow from "./ReviewShow";
import { useParams } from "react-router-dom";
import { Fetchreviews } from "../../store/review";
import "./ReviewIndex.css";

const ReviewIndex = ({ product }) => {
    const reviews = useSelector((state) => Object.values(state?.review?.reviews || {}));
    const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(Fetchreviews());
  }, [dispatch]);

  const filteredReviews = useMemo(() => {
    return reviews
      .filter((el) => el.product_id === productId)
      .reverse();
  }, [reviews, productId]);

  return (
    <div>
      {filteredReviews.map((review) => (
        <ReviewShow key={review?.id} review={review} product={product} />
      ))}
    </div>
  );
};

export default ReviewIndex;
