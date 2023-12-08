
function Link(props) {

    
    return(
        <div className="link">
            <img src={props.urlImage} alt="" />
            <span>{props.text}</span>
        </div>
    )
    
}
export default Link;