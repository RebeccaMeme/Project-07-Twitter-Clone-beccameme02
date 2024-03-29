import ReactImage from "./../images/React.svg"
import Reply from "./../images/Reply.svg"
import Share from "./../images/Share.svg"
import Groupe from "./../images/Group.svg"
import { useState } from "react"

function TweetAction(props) {
  const [activeAction, setActiveAction] = useState(null);
  const [retweetCount, setRetweetCount] = useState(props.retweet);
  const [reactCount, setReactCount] = useState(props.react);
  const [replyCount, setReplyCount] = useState(props.comment)
  const handleClick = (action) => {

    setActiveAction(action);
    switch (action) {
      case "reply":
        setReplyCount(replyCount + 1);
        break;
      case "retweet":
        setRetweetCount(retweetCount + 1);
        break;
      case "react":
        setReactCount(reactCount + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex items-center justify-between px-4 py-2 space-x-8">
      <span className={`flex items-center cursor-pointer ${activeAction === "reply" ? "text-blue-500  hover:scale-110 hover:opacity-75 " : ""
        }`}
        onClick={() => handleClick("reply")}>

        <img src={Reply} alt="Reply" className="w-4 mr-2 bg-blue-200  hover:scale-110 hover:opacity-50 " />
        {/* {props.comment} */}
        {replyCount}
      </span>
      <span className={`flex items-center cursor-pointer ${activeAction === "retweet" ? "text-green-500 " : ""
        }`}
        onClick={() => handleClick("retweet")}>

        <img src={Groupe} alt="Retweet" className="w-4 mr-2 bg-green-200  hover:scale-110 hover:opacity-50 " />
        { /*{props.retweet} */}
        {retweetCount}
      </span>
      <span className={`flex items-center cursor-pointer ${activeAction === "react" ? "text-yellow-500 " : ""
        }`}
        onClick={() => handleClick("react")}>

        <img src={ReactImage} alt="React" className="w-4 mr-2 bg-yellow-200  hover:scale-110 hover:opacity-50 " />
        {/* {props.react} */}
        {reactCount}

      </span>
      <span className="flex items-center cursor-pointer ">
        <img src={Share} alt="Share" className="w-4 h-4 mr-2" />
      </span>

    </div>
  );
}
export default TweetAction;

