import Img from "./../images/profile-photo.png"
import More from "./../images/More.svg"
function UseProfile(props) {
  return (
    <div className="timeline">
      <div className="profilephoto">
      </div>
       <div>
        <div className="profileAvatar"><img className="avatar" src={Img} /></div>
       
       <h1>@CNN .7m</h1>
       <p>President Joe Bideer touted a new agreement reached with the European union to <br /> case Trump-era t </p>
       </div>
       
       <div> <button className="button-useProfile">suivre</button></div>
      



    </div>
  )




} export default UseProfile;
