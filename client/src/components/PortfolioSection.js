import React from 'react';

export default (props) => {
    const { title, mainContent, bulletPoints, audioUrl, imgSource } = props; // Destructuring so we get the field names immediately

    // This needs SIGNIFICANT reorganizing in terms of CSS, HTML, etc.
    return (
        <div className="portfolioSection">
            <div>
                <h2>{title}</h2>
                <p>{mainContent}</p>
                <audio className="audio-component" autoPlay={true}>
                    <source src={audioUrl} type="audio/mpeg" />
                </audio>
            </div>
            <div className="section">
                <div>

                    {bulletPoints.map((bullet, ind) => {
                        return (
                            <div>
                                <br />
                                <br />
                                <span style={{ fontWeight: "bold" }} key={ind}>
                                    {bullet?.externalLink ? <a href={bullet.externalLink} target="_blank">{bullet.text}</a> : bullet.text}<br />
                                </span>
                                <span>
                                    {bullet.info}
                                </span>
                            </div>

                        );
                    })}


                </div>
                <div className="imgDiv">
                    <img style={{ border: "2px solid black" }} src={imgSource} alt="SectionImage" width="200" height="200"></img>
                </div>
            </div>
        </div>
    );
}