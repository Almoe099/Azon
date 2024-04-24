// import "./ReviewShow.css"
// import { useState } from "react"
// import { useSelector } from "react-redux"
// import Rating from "./Rating"
// import ReviewForm from "./ReviewForm"




//     const [visible,setVisible] = useState(false)
//     const currentUser = useSelector(state => state.session.user)
//     const canEdit = currentUser?.id === review?.user_id

//     const handleSettingDropDown = (e) => {
//         e.preventDefault()
//         setVisible(!visible)
//     }

//     const capitalizeFirstLetter = (str) =>  {
//         if (str && str.length > 0) {
//             return str[0].toUpperCase() + str.slice(1);
//         } else {
//             return "";
//         }
//     }

//     return (
//         <div id="reviewsContent">
           
//             <hr />
//             <span id="reviewIndexItemName"> 
//             {/* <img src={reviewProfile} alt="reviewProfile" id="reviewProfileImag"/> */}
//             <div>
//             {capitalizeFirstLetter(review?.fname)} {capitalizeFirstLetter(review?.lname)} 
//             {/* <p id="reviewDateCreated">{formatDate(review?.created_at)}</p> */}
//             </div>
//             {visible && <div className="reviewSettingsDropDownWrapper">
//                 <ReviewForm review={review} visible={visible} setVisible={setVisible} product={product}/>
//             </div>}
//             <div className="threedots">
//             {canEdit && <p id="currentUserDots" onClick={handleSettingDropDown}>&hellip;
//             </p>}
//             </div>
//             </span>
//             <Rating rating={review?.rating}/>
//             <p id="reviewIndexItemDescription">{review?.review}</p>
//         </div>
//     )

// }


// import { useDispatch, useSelector } from "react-redux";
// import { ReviewRating } from "../product/Rating";
// import { deleteReview, fetchReviews } from "../../store/review";
// import profile from "../../pictures/loading.jpg";
// import { useEffect } from "react";
// import * as modalActions from '../../store/modal';
// import ReviewModalCreatorEditor from "./ReviewModalCreatorEditor";
// import './ReviewShow.css';

// const ReviewShow = ({ review }) => {
//   const dispatch = useDispatch();
//   const sessionUser = useSelector(state => state.session.user);
//   const modalType = useSelector((state) => state.modal.type === "SHOW_EDIT_MODAL");


//   useEffect(() => {
//     dispatch(fetchReviews());
//   }, [dispatch]);

//   const editReview = (e) => {
//     e.preventDefault();
//     dispatch(modalActions.showModal("SHOW_EDIT_MODAL", { review: review, productId: review.productId }));
//   };
  

//   const removeReview = (e) => {
//     e.preventDefault();
//     dispatch(deleteReview(review.id));
//   };

//   let userReviews;

//   if (sessionUser && sessionUser.id === review.userId) {
//     userReviews = (
//       <div id="customerReviewShowDivMain">
//         <div id="customerReviewShowDiv">
//           <img id='reviewProfilePreset' src={profile} alt="" />
//           <span id="userReviewUsername">{review.username}</span>
//           <div className="reviewTitleDiv">
//             <ReviewRating ReviewRating={review.rating} />
//             <span className="reviewTitleSpan">{review.title}</span>
//             {modalType && <ReviewModalCreatorEditor productId={review.productId} />}
//           </div>

//           <div className="reviewBodyDiv">{review.body}</div>
//           <button className='editDeleteReviewBtn' onClick={editReview}>Edit</button>
//           <button className='editDeleteReviewBtn' onClick={removeReview}>Delete</button>
//         </div>
//       </div>
//     );
//   } else {
//     userReviews = (
//       <div id="customerReviewShowDivMain">
//         <div id="customerReviewShowDiv">
//           <img id='reviewProfilePreset' src={profile} alt="" />
//           <span id="userReviewUsername">{review.username}</span>
//           <div className="reviewTitleDiv">
//             <ReviewRating ReviewRating={review.rating} />
//             <span className="reviewTitleSpan">{review.title}</span>
//           </div>
//           <div className="reviewBodyDiv">{review.body}</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {userReviews}
//     </>
//   );
// };

// export default ReviewShow;
