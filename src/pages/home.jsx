import React from 'react';
import Header from '../components/Header';
import Tweeteditor from '../components/Tweeteditor';
import Tweets from '../components/Tweets';
import LeftSidebar from '../components/left-sidebar';
import Trends from '../components/rignt-sidebar';

// import Tweet from '../components/Tweet';
// import Tweetavatar from '../components/Tweetavatar'
// import Tweettitle from '../components/Tweettitle';
// import Tweetautor from '../components/Tweetautor.jsx';
// import Tweetaction from '../components/Tweetaction';
function Home() {
  return (
    <>
    <div className="sidebar">
      <LeftSidebar/>
    </div>
    <main className="timeline">
      <Header/>
      <Tweeteditor/>
      <Tweets/>
    </main>
    <div className="trend">
      <Trends/>
      
    </div>
    </>
  );
}

export default Home;