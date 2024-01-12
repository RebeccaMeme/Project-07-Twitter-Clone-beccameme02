
function MyLink(props) {

    
    return(
        <div className="link">
            <div>
                <img src={props.urlImage} alt="" />
            </div>
            <div>
                <span>{props.text}</span>
            </div>   
        </div>
    )
    
}
export default MyLink;