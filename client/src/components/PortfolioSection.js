import React from 'react';

export default (props) => {
    const {title, mainContent, bulletPoints, audioUrl} = props; // Destructuring so we get the field names immediately

    // This needs SIGNIFICANT reorganizing in terms of CSS, HTML, etc.
    return(
        <div>
            <h2>{title}</h2>
            <audio className="audio-component" autoPlay="true">
                <source src={audioUrl} type="audio/mpeg" />
            </audio>
            <p>{mainContent}</p>
            <ul>
                {bulletPoints.map((bullet, ind) => {
                    return(
                        <li key={ind}>
                            {bullet.text}<br/>
                            {bullet.info}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}