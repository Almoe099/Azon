import { useDispatch, useSelector } from "react-redux";
import { deleteReview, fetchReviews } from "../../store/review";
import { ReviewRating } from "./Rating";
import profile from "../../pictures/user.png";
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
      <div id="userReviewContainer">
        <div className="userReviewContent">
          <img className='userReviewProfile' src={profile} alt="" />
          <span className="userReviewName">{review.name}</span>
          <div className="userReviewTitle">
            <ReviewRating ReviewRating={review.rating} />
            <span className="userReviewTitleText">{review.title}</span>
            {modalType && <ReviewForm productId={review.productId} />}
          </div>
          <div className="userReviewDescription">{review.review}</div>
          <button className='userReviewEditBtn' onClick={editReview}>Edit</button>
          <button className='userReviewDeleteBtn' onClick={removeReview}>Delete</button>
        </div>
      </div>
    );
  } else {
    userReviews = (
      <div id="userReviewContainer">
        <div className="userReviewContent">
          <div className="pfpName">
            <img className='userReviewProfile' src={profile} alt="" />
            <span className="userReviewUsername">{review.name}</span>
          </div>
          <div className="userReviewTitle">
            <ReviewRating ReviewRating={review.rating} />
            <span className="userReviewTitleText">{review.title}</span>
          </div>
          <div className="userReviewDescription">{review.review}</div>
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