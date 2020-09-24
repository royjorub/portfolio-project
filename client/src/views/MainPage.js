import React, { useEffect, useState } from 'react';
import PortfolioSection from '../components/PortfolioSection';
import TriviaQuestion from '../components/TriviaQuestion';
import FeedbackSection from '../components/FeedbackSection';
import Header from './Header';
import Footer from './Footer';

export default (props) => {
    const [sectionNum, setSectionNum] = useState(0);
    const [isShowButtonClicked, setIsShowButtonClicked] = useState(false);

    // Function that will reveal sections one at a time
    const addOne = () => {
        setSectionNum(sectionNum+1);
    }

    const openPortfolio = (e) => {
        e.preventDefault();
        setIsShowButtonClicked(true);
    }

    // Array containing each section, PLUS the summary and eventually the comment box
    const portfolioArr = [
        <PortfolioSection 
            title="Technical experience" 
            mainContent="Adrian has matured in an age of technological wonders, varied and everchanging. He is adept with both the hard skills and soft skills needed to design software and control product developement as well as data engineering"
            audioUrl="/audio/techincalexperiencequotes.mp3" // Audio file to play upon loading this session
            imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg" // URL to image to display in that section
            bulletPoints={
                [ // Array of objects - each object is a separate bullet point
                    {
                        text: "Programming Languages", // Actual text that goes next to bullet point
                        info: "JavaScript, Java, Python, MATLAB, HTML, CSS, SQL, Excel" // Explanation that goes below the bullet point
                    },
                    {
                        text: "Experience With Frameworks And Libraries",
                        info: "Django, Spring Boot, React, jQuesry, Bootstrap, Maven, Bcrypt"
                    },
                    {
                        text: "Server Structures",
                        info: "MySql, SQLite, MongoDB (NoSQL)"
                    },
                    {
                        text: "Contribution To Projects",
                        info: ""
                    },
                    {
                        text: "Fire Emblem Heroes - Hero Tracker",
                        externalLink: "https://www.google.com", // Link to site (OPTIONAL)
                        info: "An app to help one keep track of all the heroes summoned in Fire Emblem Heroes, a mobile game.  Developed with Python and Django."
                    },
                    {
                        text: "Fire Emblem Heroes - Orb Tracker",
                        info: "Created an app to keep track of all the orbs, a unit of currency in the game, that one can obtain for free every day - includes the ability to calculate the number of orbs between two dates.  Developed with Java."
                    },
                    {
                        text: "",
                        info: ""
                    },
                ]
            }
        />,
        <PortfolioSection 
            title="Career History and Education" 
            mainContent="Lorem ipsum and other stuff" 
            audioUrl="/audio/careerhistorybackground.mp3"
            imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg" // URL to image to display in that section
            bulletPoints={
                [
                    {
                        text: "Coding Dojo",
                        info: "14-week course"
                    }
                ] 
            }
            // 
        />,
        <PortfolioSection 
            title="Skills, Attributes and Accomplishments" 
            mainContent="Lorem ipsum and other stuff" 
            audioUrl="/audio/skillsspeech.mp3"
            imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg" // URL to image to display in that section
            
            bulletPoints={
            [
                {
                    text: "Coding Dojo",
                    info: "14-week course"
                }
            ]
        } />,
    ];

    // Array of trivia questions
    const triviaArr = [
        <TriviaQuestion question="What is the right answer?"
            correctChoice="B" // A, B, C or D
            possibleAnswers={
                ["This isn't it", // Choice A
                "This is!", // Choice B
                "It's not this one", // Choice C
                "Don't pick me!"] // Choice D
            }
            audioUrl="/audio/skillsspeech.mp3"
            sectionNum={addOne} />,
        <TriviaQuestion question="What is the right answer?"
            correctChoice="A"
            possibleAnswers={
                ["This is it",
                "This is NOT it",
                "It's not this one",
                "Don't pick me!"]
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What is the right answer?"
            correctChoice="D"
            possibleAnswers={
                ["This isn't it",
                "This can't be!",
                "It's not this one",
                "Pick me!"]
            }
            sectionNum={addOne} />,
        <FeedbackSection 
            imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg" // Link to image goes here
            summaryText="I hope you enjoyed the website. It was my pleasure creating it and presenting this information to you. Please feel free to contact me and leave a comment below." // Text that goes below the image 
        />
    ];

    // useEffect(() => {
    //     setSectionNum(0);
    // }, [])

    return(
        <div>
            <Header />
            {!isShowButtonClicked ? 
            <button onClick={openPortfolio}>Show</button> :
            sectionNum < portfolioArr.length - 1 ? portfolioArr.slice(0,sectionNum+1) : portfolioArr
            }
            {isShowButtonClicked && triviaArr[sectionNum]}
            {isShowButtonClicked && sectionNum > portfolioArr.length - 1 && <Footer />}
        </div>
    );
}