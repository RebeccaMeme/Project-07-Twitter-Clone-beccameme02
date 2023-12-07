import twitter from "./../images/twitter.svg"
function Frames13(){
    return(
        <>
            <div className="frames13">
                <div className="profilePhoto"><img src={twitter} alt="" /></div>
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
export default Frames13;