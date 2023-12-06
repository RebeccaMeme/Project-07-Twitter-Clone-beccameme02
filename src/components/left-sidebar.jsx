import React from "react";
import HomeSidebar from "./Homesidebar"
import Explore from "./explore"
import Notifications from "./notifications"
import Messages from "./messages"
import Bookmarks from "./bookmars"
import Lists from "./lists"
import Profile from "./profile"
import ProfilePhoto from "./profilephoto"
import More from "./more"
import LogoSidebar from "./sidebarlogo"
import ButtonSidebar from "./button-sidebar";

function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <LogoSidebar />
            <HomeSidebar />
            <Explore />
            <Notifications />
            <Messages />
            <Bookmarks />
            <Lists />
            <Profile />
            <More />
            <ButtonSidebar/>
            <ProfilePhoto />
            
        </div>
    )
}
export default LeftSidebar;
