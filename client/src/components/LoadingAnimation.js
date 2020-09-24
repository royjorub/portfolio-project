import React, { useEffect, useState } from 'react';

// PLACEHOLDER
export default (props) => {
    return(
        <div>
            <h1>Loading this portfolio...</h1>
            <audio className="audio-element" autoPlay={true}>
            {/* Here you will change the name of the audio file */}
                <source src="/audio/welcomeAdrians.mp3" type="audio/mpeg"></source>
            </audio>
        </div>
    );
}