import React from "react"
import SearchBox from "./searchbox"
import TrendingLists from "./trendinglists"
import CommonMore from "./../images/Common-More-Button.svg"
import Settings from "./../images/Settings.svg"
import Img from "./../images/cnn.svg"
import wittert from "./../images/twitter.svg"
import timePhoto from "./../images/time.svg"
import AccountFollow from "./accountf"
import Verified from "./../images/Vector.svg"




function Trends() {
    return (
        <>
            <div className="Trends">
                <SearchBox />
                <div className="trendingLists">
                    <div className="trendingTitle">
                        <h3>Trends for you</h3>
                        <TrendingLists urlImage={Settings} />
                    </div>
                    <div className="trendingBlock">
                        <div className="tredingBlockTitle">
                            <TrendingLists text="Trending in Turkey" />
                            <TrendingLists urlImage={CommonMore} />
                        </div>
                        <b className="squid">
                            <TrendingLists text="#SQUID" /></b>
                        <TrendingLists text="2,O66Trweets" />
                    </div>
                    <div className="trendingBlock">
                        <div className="tredingBlockTitle">
                            <TrendingLists text="Trending in Turkey" />
                            <TrendingLists urlImage={CommonMore} />
                        </div>
                        <b className="squid">
                            <TrendingLists text="#SQUID" /></b>
                        <TrendingLists text="2,O66Trweets" />
                    </div>
                    <div className="trendingBlock">
                        <div className="tredingBlockTitle">
                            <TrendingLists text="Trending in Turkey" />
                            <TrendingLists urlImage={CommonMore} />
                        </div>
                        <b className="squid">
                            <TrendingLists text="#SQUID" /></b>
                        <TrendingLists text="2,O66Trweets" />
                    </div>
                    <h5>Show more</h5>
                </div>
                <div className="followLists">
                    <div className="trendLists">
                        <AccountFollow text="Who to follow" />
                    </div>
                    <div className="AccountFollow">
                        <div className="profilePhoto">
                            <AccountFollow urlImage={timePhoto} />
                        </div>
                        <div className="accaountName">
                            <div className="accaount">
                                <AccountFollow text="The New York Times" />
                                <AccountFollow urlImage={Verified} />
                                <div><button className="buttonFollow">Follow</button></div>
                            </div>
                            <div className="paragraph">
                                <AccountFollow text="@nytime" />
                            </div>
                        </div>
                    </div>
                    <div className="AccountFollow">
                    <div className="profilePhoto">
                        <AccountFollow urlImage={Img} />
                    </div>
                    <div className="accaountName">
                        <div className="accaount">
                            <AccountFollow text="CNN" />
                            <AccountFollow urlImage={Verified} />
                            <div><button className="buttonFollow">Follow</button></div>
                        </div>
                        <div className="paragraph">
                            <AccountFollow text="@CNN" />
                        </div>
                    </div>
                </div>
                <div className="AccountFollow">
                    <div className="profilePhoto">
                        <AccountFollow urlImage={wittert} />
                    </div>
                    <div className="accaountName">
                        <div className="accaount">
                            <AccountFollow text="Twitter" />
                            <AccountFollow urlImage={Verified} />
                            <div><button className="buttonFollow">Follow</button></div>
                        </div>
                        <div className="paragraph">
                            <AccountFollow text="@Twitter" />
                        </div>
                    </div>
                </div>
                <h5>Show more</h5>
                </div>
                <p>
            Terms of Service PrivacyPolicy Cookie Policy <br />
             Imprint Ads info More 0 2021 Twitter,inc.
            </p>
            </div>
            
             
        
            
        </>
    )
}
export default Trends;
