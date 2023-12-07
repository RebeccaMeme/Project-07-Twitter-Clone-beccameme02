import time from "./../images/time.svg"
import verified from "./../images/vector.svg"
function FrameTr() {
    return (
        <>
            <div className="frame">
                <div className="profilePhoto"><img src={time} alt="" /></div>
                <div className="accountName">
                    <div className="account">
                        <div className="paragraphe"><span>The New York Times<span><img src={verified} alt="" /></span></span></div>
                        <div>
                            <span>@nytimes</span>
                        </div>
                    </div>
                    <div className="followbtn">
                        <button>follow</button>
                    </div>

                </div>



            </div >
        </>

    )
}
export default FrameTr;