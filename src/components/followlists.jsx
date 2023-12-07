import AccountFollow from "./accountf";
import Footer from "./footer";
import TrendingLists from "./trendinglists";

function FollowLists(){
    return(
        <div className="followlists">
            <div className="trendlists">
                <div className="trendsfor">
                    <input type="Trends for you" />

                </div>
                <div><TrendingLists/></div>
                <div><AccountFollow/></div>
                
            </div>
            <div>
                <Footer/>
            </div>
            

        </div>
    )
}
export default FollowLists;