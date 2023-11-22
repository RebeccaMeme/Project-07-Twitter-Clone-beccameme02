import React from 'react';
import Header from '../components/Header';
import Tweeteditor from '../components/Tweeteditor';
import Tweets from '../components/Tweets';

// import Tweet from '../components/Tweet';
// import Tweetavatar from '../components/Tweetavatar'
// import Tweettitle from '../components/Tweettitle';
// import Tweetautor from '../components/Tweetautor.jsx';
// import Tweetaction from '../components/Tweetaction';
function Home() {
  return (
    <main className="timeline">
      <Header/>
      <Tweeteditor/>
      <Tweets/>
      
      
    </main>
  );
}

export default Home;