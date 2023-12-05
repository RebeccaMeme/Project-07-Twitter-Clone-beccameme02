import Logo from "./../images/Logo.svg"
import Home from "./../images/Home.svg"
import Explore from "./../images/Explore.svg"
import Notifications from "./../images/Notifications.svg"
import Messages from "./../images/Messages.svg"
import Bookmarks from "./../images/Bookmarks.svg"
import Lists from "./../images/Lists.svg"
import Profile from "./../images/.svg"
import Profilephoto from "./../images/Profile-Photo.svg"
import Cle from "./../images/Cle.svg"
import More from "./../images/More.svg"
function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div>
                <div className="logo">
                    <img src={Logo} alt="logo-Twitter" />
                    <div className="home">
                        <img src={Home} alt="" />
                        <span >Home</span>
                    </div>
                    <div className="explore">
                        <img src={Explore} alt="" />
                        <span>Explore</span>
                    </div>
                    <div className="notifications">
                        <img src={Notifications} alt="" />
                        <span>Notifications</span>

                    </div>
                    <div className="messages">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                    <div className="bookmars">
                        <img src={Bookmarks} alt="" />
                        <span>Bookmarks</span>
                    </div>
                    <div className="lists">
                        <img src={Lists} alt="" />
                        <span>Lists</span>
                    </div>
                    <div className="profile">
                        <img src={Profile} alt="" />
                        <span>Profile</span>
                    </div>
                    <div className="more">
                        <img src={More} alt="" />
                        <span>More</span>
                    </div>
                    <button type="button">Tweet</button>
                </div>
            </div>

            <div className="profilephoto">
                <img src={Profilephoto} alt="" />
                <span>Bradley</span> <img src={Cle} alt="" /><span> ...</span>
            </div>

        </div>
    )
}
export default LeftSidebar
