import ReactImage from "./../images/React.svg"
import Reply from "./../images/Reply.svg"
import Share from "./../images/Share.svg"
import Groupe from "./../images/Group.svg"
import { useState} from "react"

function TweetAction (props) {
  const [activeAction, setActiveAction] = useState(null);
  const handleClick = (action) =>{
    setActiveAction(action);
  };
  return(
    <div className="flex items-center justify-between px-4 py-2 space-x-8">
      <span className={`flex items-center cursor-pointer ${
        activeAction === "reply" ? "text-blue-500  hover:scale-110 hover:opacity-75 ": ""
      }`}
      onClick={() => handleClick("reply")}>
      
      <img src= {Reply} alt="Reply" className="w-4 mr-2 bg-blue-200  hover:scale-110 hover:opacity-75 "/>
      {props.comment}
      </span>
      <span className={`flex items-center cursor-pointer ${
        activeAction === "retweet" ? "text-green-500 ": ""
      }`}
onClick={() => handleClick("retweet")}>
      
      <img src= {Groupe} alt="Retweet" className="w-4 mr-2 bg-green-200  hover:scale-110 hover:opacity-75 "/>
      {props.retweet}
      </span>
      <span className={`flex items-center cursor-pointer ${
        activeAction === "react" ? "text-yellow-500 ": ""
      }`}
      onClick={() => handleClick("react")}>
      
      <img src= {ReactImage} alt="React" className="w-4 mr-2 bg-yellow-200  hover:scale-110 hover:opacity-75 "/>
      {props.react}

      </span>
      <span className="flex items-center cursor-pointer ">
        <img src={Share} alt="Share" className="w-4 h-4 mr-2"/>
      </span>

    </div>
  );
  //  const [color1,setColor1] = useState("");
  // const [color2,setColor2] = useState("");
  // const [color3,setColor3] = useState("");
  // const handleClick1 = ()=>{ setColor1("red")}
  // const handleClick2 = ()=>{ setColor2("blue")}
  // const handleClick3 = ()=>{ setColor3("yellow")}
  // return (
  //   <div className="tweet-actions">
  //     <span className="tweet-action"onClick={handleClick1} style={{color: color1}}>
  //       <img src={Reply} alt="" />
  //      {props.comment} 
  //     </span>
  //     <span className="tweet-action" onClick={handleClick2} style={{color: color2}} >
  //       <img src={Groupe} alt="" />
  //       {props.retweet}
  //     </span>
  //     <span className="tweet-action" onClick={handleClick3} style={{color: color3}}>
  //       { <img src={ReactImage} alt="" /> }
        
  //       {props.react}
  //     </span>
  //     <span className="tweet-action">
  //       <img src={Share} alt="" />
  //     </span>
  //   </div>
  // )
}
export default TweetAction;
