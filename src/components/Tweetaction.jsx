import ReactImage from "./../images/React.svg"
import Reply from "./../images/Reply.svg"
import Share from "./../images/Share.svg"
import Groupe from "./../images/Group.svg"

function TweetAction(props) {
  return (
    <div className="tweet-actions">
      <span className="tweet-action" title="comment" onClick={props.handleClick} style={{color: "red"}}>
        <img src={Reply} alt="" style={{color: "red"}} />
        <span>{props.comment}</span>
      </span>
      <span className="tweet-action" title="retweet" onClick={props.handleClick} style={{color: "blue"}}>
        <img src={Groupe} alt="" />
        <span>{props.retweet}</span>
      </span>
      <span className="tweet-action" title="react" onClick={props.handleClick} style={{color:"yellow"}}>
        <img src={ReactImage} alt="" />
        <span>{props.react}</span>
      </span>
      <span className="tweet-action">
        <img src={Share} alt="" />
      </span>
    </div>
  )
}
export default TweetAction;