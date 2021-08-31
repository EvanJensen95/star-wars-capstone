import React from "react";
// import {useEasybase} from 'easybase-react'

function Home() {
  // const { userID } = useEasybase();
  return (
    <div className="Container">
      <h1 className="Galaxy">
        A not so long time ago in a galaxy not that far away...
      </h1>
      <br />
      <h3 className="Cantina">
        A smuggler without work (you) was drifting throughout the galaxy
        searching for their next big job. When they stopped in for a drink at
        Mos Eisley's Cantina.
      </h3>
      <br />
      <h3 className="Solo">
        Who do you find there? The one two punch of the smuggling world, none
        other than Han Solo and Chewbacca. You ask them for work and Han is a
        bit hestiant. He needs to see if you are truly a Star Wars fan.
        <br />
        He also would like you round up some extra hands to help on this
        smuggling journey, choose wisley, because it may be pretty challenging.
      </h3>
      <br />
    </div>
  );
}
export default Home;
