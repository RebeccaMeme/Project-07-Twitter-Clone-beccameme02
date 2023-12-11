import React from "react"
import SearchBox from "./searchbox"
import TrendingLists from "./trendinglists"
import CommonMore from "./../images/Common-More-Button.svg"
import Settings from "./../images/Settings.svg"
import Img from "./../images/cnn.svg"
import twitter from "./../images/twitter.svg"
import timePhoto from "./../images/time.svg"
import AccountFollow from "./accountf"
import Footer from "./footer"
import Verified from "./../images/Vector.svg"




function Trends() {
    return (
        <div className="Trends">
            <SearchBox />
            <div className="trendingLists">
                <div className="trendingTitle">
                    <h3>Trends for you</h3>
                    <TrendingLists  urlImage={Settings} />
                </div>
                 <div className="trendingBlock">
                    <div className="tredingBlockTitle">
                        <TrendingLists text="Trending in Turkey"/>
                        <TrendingLists urlImage={CommonMore}/>
                    </div>
                   
                    <b className="squid">
                        <TrendingLists text="#SQUID" /></b>
                    <TrendingLists text="2,O66Trweets" />
                </div>
                 <div className="trendingBlock">
                    <div className="tredingBlockTitle">
                        <TrendingLists text="Trending in Turkey"/>
                        <TrendingLists urlImage={CommonMore}/>
                    </div>
                   
                    <b className="squid">
                        <TrendingLists text="#SQUID" /></b>
                    <TrendingLists text="2,O66Trweets" />
                </div>
                 <div className="trendingBlock">
                    <div className="tredingBlockTitle">
                        <TrendingLists text="Trending in Turkey"/>
                        <TrendingLists urlImage={CommonMore}/>
                    </div>
                   
                    <b className="squid">
                        <TrendingLists text="#SQUID" /></b>
                    <TrendingLists text="2,O66Trweets" />
                </div>
                
                
            </div>

            <div className="AccountFollow">
                <div className="timeFollow">
                    <div className="temsFol">
                        <div className="">
                            <AccountFollow urlImage={timePhoto} />
                        </div>
                        <div>
                            <AccountFollow text="The New York Times"/>
                            <AccountFollow urlImage={Verified}/>
                        </div>
                        <div>
                         <AccountFollow text="@nytimes"/>
                        </div>        
                    </div>
                    <div>
                        <AccountFollow text="Follow" />
                    </div>
                    
                </div>
                <div>
                    <div>
                        <AccountFollow text="CNN" urlIamge={Img} />
                        <AccountFollow text="@CNN" urlImage={Verified} />
                    </div>
                    <div>
                        <AccountFollow text="Follow" />
                    </div>
                    
                    
                </div>
                <div>
                    <div>
                        <AccountFollow text="Twitter" urlImage={twitter} />
                        <AccountFollow text="@nytimes" urlImage={Verified} />
                    </div>
                    <div>
                        <AccountFollow text="Follow" />
                    </div>
                    
                    
                </div>

                
                


            </div>
            <Footer />

        </div>
    )
}
export default Trends;
