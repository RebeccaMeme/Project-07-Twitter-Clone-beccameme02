import iconeSettings from "./../images/settings.svg"
import Content from "./content";
function TrendingLists() {
    return (
        <div className="trendinglists">
            <div className="trendlists">
                <div className="trendsforyou">
                    <span>Trends for you</span><div className="commonOptions">
                        <img src={iconeSettings} alt="" />

                    </div>

                </div>

                <Content />
            </div>
            <div className="showmore">
                <span>Showmore</span>

            </div>

        </div>
    )
}
export default TrendingLists;