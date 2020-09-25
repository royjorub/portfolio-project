import React, { useState, useEffect } from 'react';
import '../css/Header.css'
// import '../css/LoadingAnimation.css';
import YouTube from 'react-youtube'; // Make sure to do "npm i react-youtube"!
// import ReactCSSTransitionGroup from 'react-transition-group'; // Make sure to do "npm i"


const Header = (props) => {
    // const [time, setTime] = useState(0);

    // setTimeout(()=>{
    //     setTime(1);
    // }, 1000)

    // if (time === 1) { // When time is up (after 1 second)
    //     // Play audio file at this point

    // }

    return (
        <div className="container">

            <div className="topnav" id="myTopnav">
                <div class="logoDiv">
                    <p>Adrian Barnard</p>
                </div>
                <div className="menu-links">
                    {/* Change the links below as appropriate */}
                    <a href="#">Resume</a>
                    <a href="mailto:pabarnard@outlook.com">Email</a>
                    <a href="https://github.com/pbarnard1">GitHub</a>
                    <a href="https://www.linkedin.com/in/tural-hasanli-90910a118/">LinkedIn</a>
                </div>
            </div>
            <div className="youtubeIntroduction"  >
                {/* Change the ID of the video and change the message here as appropriate */}
                <div className="introduction">
                    <p>Hello. This portfolio is a culmination of my life's work and passions. I hope to guide you through an experience, of which in the end, you know me better and can assert that I would be a pretty nifty dinner guest.</p>
                </div>
                <div>
                    <YouTube videoId="6caW0EDswRY" className="youtube" />
                </div>

                <audio className="audio-element" autoPlay={true}>
                    {/* Here you will change the name of the audio file */}
                    <source src="/audio/welcomeAdrians.mp3" type="audio/mpeg"></source>
                </audio>
            </div>
        </div>
    );
}

export default Header;