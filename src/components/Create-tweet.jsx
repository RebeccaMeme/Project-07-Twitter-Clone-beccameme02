import Img from "./../images/profile-photo.png"
function Createtweet() {
    return (
        <div className="tweet-editor">
            <img className="avatar" src={Img} />
            <div className="tweet-editor-form">
                <input className="tweet-editor-input" placeholder="What's happening?" type="texte" />
                <div className="tweet-editor-buttons">
                    <div className="tweet-editor-actions" >
                        <img alt="ico" />
                        <img alt="ico" />
                        <img alt="ico" />
                        <img alt="ico" />
                        <img alt="ico" />
                    </div>
                    <button className="button">Tweet</button>
                </div>

            </div>

        </div>
    )
}
export default Createtweet;