import ReactImage from "./../images/React.svg"
import Reply from "./../images/Reply.svg"
import Share from "./../images/Share.svg"
import Groupe from "./../images/Group.svg"
import { useState } from "react"

function TweetAction({comment, retweet, react}) {
  const[Color1, setColor1]= useState("");
  const[Color2, setColor2]= useState("");
  const[Color3, setColor3]= useState("");
  
  const handleClick1 = () => {
    setColor1("red");
  };
  const handleClick2 = () => {
    setColor2("blue");
  };
  const handleClick3 = () => {
    setColor3("yellow");
  };

  return (
    <div className="tweet-actions">
      <span className="tweet-action" title="comment" onClick={handleClick1} style={{Color: Color1}}>
        <img src={Reply} alt="" />
        {comment}
      </span>
      <span className="tweet-action" title="retweet" onClick={handleClick2} style={{Color: Color2}}>
        <img src={Groupe} alt="" />
        {retweet}
      </span>
      <span className="tweet-action" title="react" onClick={handleClick3} style={{Color: Color3}}>
        <img src={ReactImage} alt="" />
        {react}
      </span>
      <span className="tweet-action">
        <img src={Share} alt="" />
      </span>
    </div>
  )
}
export default TweetAction;