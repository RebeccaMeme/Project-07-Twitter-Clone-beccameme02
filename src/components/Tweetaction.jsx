import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import logo from "./../images/profile-photo.png";
function Tweetaction(props) {
  return (
    <div className="tweet-actions">
        <span className="tweet-action">
          <FiMessageCircle />
          <span>{props.comment}</span>
        </span>

        <span className="tweet-action">
          <FaRetweet />
          <span>{props.retweet}</span>
        </span>

        <span className="tweet-action">
          <CiHeart />
          <span>{props.react}</span>
        </span>

        <span className="tweet-action">
          <FiShare />
          
        </span>
      </div>
  )
}
export default Tweetaction;