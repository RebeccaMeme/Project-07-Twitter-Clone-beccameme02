
import Tweetauthor from "./Tweetauthor";

import Tweettitle from "./Tweettitle";
import Tweetaction from "./Tweetaction";
import Img from "./../images/tweet-profile-photo.png"
import time from "./../images/time.svg"
import twitter from "./../images/twitter.svg"
import Image from "./../images/tweet-image.png"

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
      img:Image,
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
      retweet:"68K" ,
      comment: "36.0K",
      react: "267.1K"
    },
    {
      text: "hello literally everyone",
      profile:twitter,
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
      retweet: "",
      comment: "",
      react: ""
    }
   

  ]


  return (
    <>
      {tweets.map((tweet, index) => {
        return (
          <div className="tweet" key={index}>

            <img src={tweet.profile} className="tweet-avatar" />
            <div className="tweet-content">
              <div className="tweet-body">
                <Tweettitle author={tweet.author} user={tweet.user} time={tweet.time} />
                <p className="tweet-text">
                  {tweet.text}
                </p>
                <div className="tweet-image">
                  <img src={tweet.img} alt="" />
                </div>
              </div>
              <Tweetaction comment={tweet.comment} retweet={tweet.retweet} react={tweet.react} />
            </div>


            <Tweetauthor />





          </div>
        )
      })}

    </>
  )
}
export default Tweet;
