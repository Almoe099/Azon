import { useDispatch, useSelector } from "react-redux";
import { deleteReview, fetchReviews } from "../../store/review";
import { ReviewRating } from "./Rating";
import profile from "../../pictures/loading.jpg";
import { useEffect } from "react";
import * as modalActions from '../../store/modal';
import ReviewForm from "./ReviewForm";
import './ReviewShow.css';

const ReviewShow = ({ review }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const modalType = useSelector((state) => state.modal.type === "SHOW_EDIT_MODAL");


  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const editReview = (e) => {
    e.preventDefault();
    dispatch(modalActions.showModal("SHOW_EDIT_MODAL", { review: review, productId: review.productId }));
  };
  

  const removeReview = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review.id));
  };

  let userReviews;

  if (sessionUser && sessionUser.id === review.userId) {
    userReviews = (
      <div id="customerReviewShowDivMain">
        <div id="customerReviewShowDiv">
          <img id='reviewProfilePreset' src={profile} alt="" />
          <span id="userReviewName">{review.name}</span>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <span className="reviewTitleSpan">{review.title}</span>
            {modalType && <ReviewForm productId={review.productId} />}
          </div>

          <div className="reviewReviewDiv">{review.review}</div>
          <button className='editDeleteReviewBtn' onClick={editReview}>Edit</button>
          <button className='editDeleteReviewBtn' onClick={removeReview}>Delete</button>
        </div>
      </div>
    );
  } else {
    userReviews = (
      <div id="customerReviewShowDivMain">
        <div id="customerReviewShowDiv">
          <img id='reviewProfilePreset' src={profile} alt="" />
          <span id="userReviewUsername">{review.username}</span>
          <div className="reviewTitleDiv">
            <ReviewRating ReviewRating={review.rating} />
            <span className="reviewTitleSpan">{review.title}</span>
          </div>
          <div className="reviewReviewDiv">{review.review}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {userReviews}
    </>
  );
};

export default ReviewShow;