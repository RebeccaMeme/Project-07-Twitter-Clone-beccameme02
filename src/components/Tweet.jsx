import TweetAuthor from "./tweetAuthor";
import TweetTitle from "./tweetTitle";
import TweetAction from "./tweetAction";
import Img from "./../images/cnn.svg"
import time from "./../images/time.svg"
import twitter from "./../images/twitter.svg"
import Image from "./../images/tweet-image.png"
import {useState} from "react"

function Tweet() {
  const tweets = [
    {
      text: "President Joe Bideer touted a new agreement reached with the European union to ease Trump-era tariffs on aliminum and steel as amajor breakhrough that would serve to both strengthen the Us steelindustry and combat the global climate crisis.",
      profile: Img,
      author: "CNN",
      user: "@CNN",
      time: "7m",
      retweet: 57,
      comment: "144",
      react: "184"
    },
    {
      text: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
      profile: time,
      author: "New York Time",
      user: "@nyt",
      img: Image,
      time: "2h",
      retweet: 8,
      comment: "38",
      react: "12"
    },
    {
      text: "BIG NEWS lol jk still Twitter  ",
      profile: twitter,
      author: "Twitter",
      user: "@twitter",
      time: ".Oct29",
      retweet: "68K",
      comment: "36.0K",
      react: "267.1K"
    },
    {
      text: "hello literally everyone",
      profile: twitter,
      author: "Twitter",
      user: "@twitter",
      time: ".Oct4",
      retweet: 187,
      comment: "785,4K",
      react: "3,3M"
    },
    {
      text: "hello literally everyone",
      profile: twitter,
      author: "Twitter",
      user: "@twitter",
      time: ".Oct4",
      retweet: "56",
      comment: "138",
      react: "3,8M"
    }
  ]
  const [TweetActionColor,setTweetActionColor] = useState("white")
  const handleClick = ()=>{
    setTweetActionColor("red")
  }
  
  return (
    <>
      {tweets.map((Tweet, index) => {
        return (
          <div className="tweet" key={index}>
            <img src={Tweet.profile} className="tweet-avatar" />
            <div className="tweet-content">
              <div className="tweet-body">
                <TweetTitle author={Tweet.author} user={Tweet.user} time={Tweet.time} />
                <p className="tweet-text">
                  {Tweet.text}
                </p>
                <div className="tweet-image">
                  <img src={Tweet.img} alt="" />
                </div>
              </div>
              <TweetAction comment={Tweet.comment} retweet={Tweet.retweet} react={Tweet.react} />
            </div>
            <TweetAuthor />
          </div>
        )
      })}
    
      <button onClick={handleClick}></button>
  
    

    </>
  )
 

    }
export default Tweet

