import ReactImage from "./../images/React.svg"
import Reply from "./../images/Reply.svg"
import Share from "./../images/Share.svg"
import Groupe from "./../images/Group.svg"
import { useState, useEffect } from "react"

function TweetAction (props) {
  const [color1,setColor1] = useState("");
  const [color2,setColor2] = useState("");
  const [color3,setColor3] = useState("");
  const handleClick1 = ()=>{ setColor1("red")}
  const handleClick2 = ()=>{ setColor2("blue")}
  const handleClick3 = ()=>{ setColor3("yellow")}
  return (
    <div className="tweet-actions">
      <span className="tweet-action" onClick={handleClick1} style={{color: color1}}>
        <img src={Reply} alt="" />
       {props.comment} 
      </span>
      <span className="tweet-action" onClick={handleClick2} style={{color: color2}} >
        <img src={Groupe} alt="" />
        {props.retweet}
      </span>
      <span className="tweet-action" onClick={handleClick3} style={{color: color3}}>
        <img src={ReactImage} alt="" />
        {props.react}
      </span>
      <span className="tweet-action">
        <img src={Share} alt="" />
      </span>
    </div>
  )
}
export default TweetAction;