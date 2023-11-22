import imag from "./../images/Vector.svg";
function Tweettitle(props){
    return(
      <>
      <div className="tweet-title">
      <span className="tweet-title-author">{props.author}</span>
      <span><img src={imag} alt="" /></span>
      <span className="tweet-title-details">{props.user}</span>
      <span className="tweet-title-details">.</span>
      <span className="tweet-title-details">{props.time}</span>
      </div>
      </>
       
    )
}
export default Tweettitle; 