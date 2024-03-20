import "./ReviewShow.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import Rating from "./Rating"
import ReviewForm from "./ReviewForm"


const ReviewShow = ({review, product}) => {

    const [visible,setVisible] = useState(false)
    const currentUser = useSelector(state => state.session.user)
    const canEdit = currentUser?.id === review?.user_id

    const handleSettingDropDown = (e) => {
        e.preventDefault()
        setVisible(!visible)
    }

    const capitalizeFirstLetter = (str) =>  {
        if (str && str.length > 0) {
            return str[0].toUpperCase() + str.slice(1);
        } else {
            return "";
        }
    }

    return (
        <div id="reviewsContent">
           
            <hr />
            <span id="reviewIndexItemName"> 
            {/* <img src={reviewProfile} alt="reviewProfile" id="reviewProfileImag"/> */}
            <div>
            {capitalizeFirstLetter(review?.fname)} {capitalizeFirstLetter(review?.lname)} 
            {/* <p id="reviewDateCreated">{formatDate(review?.created_at)}</p> */}
            </div>
            {visible && <div className="reviewSettingsDropDownWrapper">
                <ReviewForm review={review} visible={visible} setVisible={setVisible} product={product}/>
            </div>}
            <div className="threedots">
            {canEdit && <p id="currentUserDots" onClick={handleSettingDropDown}>&hellip;
            </p>}
            </div>
            </span>
            <Rating rating={review?.rating}/>
            <p id="reviewIndexItemDescription">{review?.review}</p>
        </div>
    )

}

export default ReviewShow
