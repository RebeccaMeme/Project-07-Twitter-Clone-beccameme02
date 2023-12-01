
import ReactImage from "./../images/React.svg"
import Reply from "./../images/Reply.svg"
import Share from "./../images/Share.svg"
import Group from "./../images/Group.svg"



function Tweetaction(props) {
  return (
    <div className="tweet-actions">
      <span className="tweet-action">
        <img src={Reply} alt="" />
        <span>{props.comment}</span>
      </span>
      <span className="tweet-action">
        <img src={Group} alt="" />
        <span>{props.retweet}</span>
      </span>
      <span className="tweet-action">
        <img src={ReactImage} alt="" />
        <span>{props.react}</span>
      </span>
      <span className="tweet-action">
        <img src={Share} alt="" />
      </span>
    </div>
  )
}
export default Tweetaction;