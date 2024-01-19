
function TrendingLists(props) {
    return (
        <>
<div className="trendinglists">
        <img src={props.urlImage} alt="" />
        <span>{props.text}</span>
        
    </div>
        </>
        
    )
}
export default TrendingLists;
