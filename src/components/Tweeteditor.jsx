import Img from "./../images/profile-photo.png"
import media from "./../images/media.svg"
import Gif from "./../images/Gif.svg"
import Poll from "./../images/Poll.svg"
import Emoji from "./../images/Emoji.svg"
import Schedule from "./../images/Schedule.svg"

function TweetEditor() {
    return (
        <div className="tweet-editor">
            <img className="avatar" src={Img} />
            <div className="tweet-editor-form">
                <input className="tweet-editor-input" placeholder="What's happening?" type="texte" />
                <div className="tweet-editor-buttons">
                    <div className="tweet-editor-actions" >
                        <img src={media} />
                        <img src={Gif} />
                        <img src={Poll} />
                        <img src={Emoji} />
                        <img src={Schedule} />
                    </div>
                    <button className="button">Tweet</button>
                </div>
            </div>
        </div>
    )
}
export default TweetEditor;