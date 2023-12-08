import React from "react";
import LogoSidebar from "./sidebarlogo"
import ButtonSidebar from "./button-sidebar";
import Link from "./Link";
import Message from "./../images/Messages.svg"
import Notification from "./../images/Notifications.svg"
import Home from "./../images/Home.svg"
import Explore from "./../images/Explore.svg"
import Bookmark from "./../images/Bookmarks.svg"
import Lists from "./../images/Lists.svg"
import More from "./../images/More.svg"
import Profilephoto from "./../images/Profile-Photo.svg"
import Profile from "./../images/Profile.svg"
import CommonMore from "./../images/Common-More-Button.svg"
import Cle from "./../images/Cle.svg"

function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <LogoSidebar />
            <Link text="Home" urlImage={Home} />
            <Link text="Explore" urlImage={Explore} />
            <Link text="Notifications" urlImage={Notification} />
            <Link text="Messages" urlImage={Message} />
            <Link text="Bookmarks" urlImage={Bookmark} />
            <Link text="Lists" urlImage={Lists} />
            <Link text="Profile" urlImage={Profile} />
            <Link text="More" urlImage={More} />
            <ButtonSidebar />
            <Link text="Bradley Ortiz" urlImage={Profilephoto} />
            <Link urlImage={Cle}/>
            <Link urlImage={CommonMore}/>
            <Link text="@ bradley"/>



        </div>
    )
}
export default LeftSidebar;
