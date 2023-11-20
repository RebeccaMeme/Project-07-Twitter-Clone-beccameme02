import React from 'react';
import Header from '../components/Header';
import Createtweet from '../components/Create-tweet';
import Tweets from '../components/Tweets';
function Home() {
  return (
    <main className="timeline">
      <Header/>
      <Createtweet/>
      <Tweets/>
    </main>
  );
}

export default Home;