import img from "./../images/tweet-profile-photo.png"
import img from "./../images/tweet-image.png"
function tweets(){
  return(
    <div className="tweets">
      <div className="tweet">
        <div>
        <img  src={img}/>
        </div>
        <div>
        <img className="tweet-avatar" src={img}/>
        <div className="tweet-content">
          <div className="tweet-body">
            <h2 className="tweet-title">The New York Time @nytimes.2h</h2>
            <p className="tweet-text">Garderning boormed during the pandemie six Black writers share how has helped</p>
            <img className="tweet-image" src={img}/>
          </div>

        </div>
        </div>
        
      
      </div>
      <div>
        
      </div>
        


    </div>
  )  
} 