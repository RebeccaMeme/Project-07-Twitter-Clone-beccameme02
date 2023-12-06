import Profilephoto from "./../images/Profile-Photo.svg"
import commonMore from "./../images/Common-More-Button.svg"
import Cle from "./../images/Cle.svg"
function ProfilePhotos() {
    return (
        <div className="profilephoto">
            <div><img src={Profilephoto} alt="" /></div>
            <div><span>BradleyOrtiz</span> <span><img src={Cle} alt="" /></span> <span><img src={commonMore} alt="" /></span></div>

            <div>@bradley</div>
        </div>
    )
}
export default ProfilePhotos;
