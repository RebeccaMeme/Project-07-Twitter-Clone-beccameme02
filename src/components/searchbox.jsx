import search from "../images/search.svg"
import SearchTwitter from "../images/serach Twitter.svg"
function SearchBox() {
    return (
        <div className="searchBox" >
             <div className="searchText">
                <img  className= "iconSearch" src={search} alt="" />
                < input className="inputSearch"  type={SearchTwitter}  placeholder='Search Twitter' />

                </div>
            







        </div>
    )
}
export default SearchBox;
