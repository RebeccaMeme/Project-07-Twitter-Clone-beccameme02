
import topTweet from "./../images/toptweet.svg"
function Header() {
    return (
        <div className="header">
            <h1 className="page-title">Home</h1>

            <img className="top-tweets" src={topTweet} />
        </div>
    )
}
export default Header