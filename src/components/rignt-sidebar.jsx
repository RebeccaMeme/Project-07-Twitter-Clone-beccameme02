import iconeSettings from "./../images/settings.svg"
import verified from "./../images/Vector.svg"
import  showMoreBtn from "./../images/Common-More-Button.svg"
import Showmore from "./../images/Common-More-Button.svg"
import showMore from "./../images/Common-More-Button.svg"
import time from "./../images/time.svg"
import cnn from "./../images/cnn.svg"
import twitter from "./../images/twitter.svg" 
function RigntSidebar(){
    return(
        <>
        <div className="rignt-sidebar">
            <div className="Trending-Lists">
                <div className="Trend-Lists">
                    <div className="Common-Options">
                        <div  className="iconsSettings">
                         <img src={iconeSettings} alt="" />
                        </div>

                    </div>
                    <input type="Trends for you" />
                    <div className="CommonMorButton">
                       <img src={showMoreBtn} alt="" />
                    </div>

                </div>
                <div className="showMoreBtn">
                    <div className="showMore">
                        <img src={showMore} alt="" />
                        <input type={Showmore} />

                    </div>

                </div>

            </div>
            <div className="Follow-Lists">
            <div>
            <h2>Who to follow</h2>
            </div>
                <div className="Account-Follow">
                    <div className="Account-Name">
                        <div className="Account">
                            <span><input type="The New york Time" /><img src={verified} alt="" /> @nytimes</span>
                            <div className="ProfilePhoto">
                                <img src={time} alt="" />
                            </div>
                        </div>
                        <button>Follow</button>

                    </div>
                    <div className="Showmore">
                        <input type={Showmore} />

                    </div>
                    <div className="Account-Name">
                       <div className="Account">
                          <div className="ProfilePhoto">
                            <img src={cnn} alt="" />
                           <span>CNN <span><img src={verified} alt="" /></span>  @CNN</span>

                          </div>
                       </div>
                    </div>
                    <div className="Account-Name">
                       <div className="Account">
                          <div className="ProfilePhoto">
                            <img src={twitter} alt="" />
                           <span>CNN <span><img src={verified} alt="" /></span>  @Twitter</span>

                          </div>
                       </div>
                    </div>
                    

                </div>

            </div>
            <div className="TwitterFooter">
                <span>Termes of Service Privecy Cooke Policy Inprint Ads info More,- 2021Twitter,rs</span>

            </div>

        </div>
        </>
    )
}
export default RigntSidebar
