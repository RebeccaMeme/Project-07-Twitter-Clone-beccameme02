function AccountFollow(props) {
    return (
        <div className="accountFollow">
            <img src={props.urlImage} alt="" />
            <span>{props.text}</span>
             
        </div>
        
    )
}
export default AccountFollow;