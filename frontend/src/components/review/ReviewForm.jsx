import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, updateReview } from '../../store/review';
import { CreateReviewRating } from './Rating';
import Modal from '../modal/Modal';
import * as modalActions from '../../store/modal';
import './ReviewForm.css';

const ReviewForm = ({ productId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const modalState = useSelector(state => state.modal);
  const isEditing = modalState.type === "SHOW_EDIT_MODAL";
  
  const reviewData = modalState.modalData.review || {};
  const [title, setTitle] = useState(isEditing ? reviewData.title : "");
  const [review, setReview] = useState(isEditing ? reviewData.review : "");
  const [rating, setRating] = useState(isEditing ? reviewData.rating : 0);

  const userId = sessionUser.id;
  const name = sessionUser.name;


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(updateReview({
        id: isEditing ? reviewData.id : undefined,
        title,
        review,
        rating,
        userId,
        productId,
        name,
      }));
    } else {
      dispatch(createReview({
        title,
        review,
        rating,
        userId,
        productId,
        name,
      }));
    }

    dispatch(modalActions.hideModal());
  };


  const handleCloseReview = (e) => {
    e.preventDefault();
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal id='reviewModal' isEditing={isEditing ? true : false}>
      <div id='modalWrapper'>
        <div id='reviewModalContent'>
          <CreateReviewRating rating={rating} setRating={setRating} />
          <button id='closeReviewBtn' onClick={handleCloseReview}>&#x2715;</button>
          <input type="text" 
            placeholder='Title'
            id='reviewTitleInput'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea 
            placeholder='Write your review'
            id='reviewTextarea'
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />

          <button id='submitReviewBtn' onClick={handleSubmit}>Submit Review</button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewForm;