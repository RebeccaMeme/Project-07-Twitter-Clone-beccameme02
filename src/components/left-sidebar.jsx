import React from "react";
import LogoSidebar from "./sidebarlogo"
import ButtonSidebar from "./button-sidebar";
import MyLink from "./Link";
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
import Cle from "./../images/Cle.svg";
import { NavLink } from "react-router-dom";

function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <LogoSidebar />
            <NavLink to='/'>
              <MyLink text="Home" urlImage={Home} />
            </NavLink>
            <MyLink text="Explore" urlImage={Explore} />
            <MyLink text="Notifications" urlImage={Notification} />
            <MyLink text="Messages" urlImage={Message} />
            <MyLink text="Bookmarks" urlImage={Bookmark} />
            <MyLink text="Lists" urlImage={Lists} />
            <NavLink to='/profile'>
                <MyLink text="Profile" urlImage={Profile} />
            </NavLink>
            
            <MyLink text="More" urlImage={More} />
            <ButtonSidebar />
            <div className="bradley">
            <MyLink  urlImage={Profilephoto} />
            <div className="ortiz">
            <MyLink text="BradleyOrtiz" urlImage={Cle} />
            <MyLink urlImage={CommonMore}/>
            </div>
            
            </div>
            <MyLink text="@ bradley"/>



        </div>
    )
}
export default LeftSidebar;
