import React, { useEffect, useState } from 'react';
import PortfolioSection from '../components/PortfolioSection';
import TriviaQuestion from '../components/TriviaQuestion';
import FeedbackSection from '../components/FeedbackSection';
import Header from './Header';
import Footer from './Footer';

/*

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
                        info: "Django, Spring Boot, React, jQuery, Bootstrap, Maven, Bcrypt"
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
                        externalLink: "https://github.com/pbarnard1/feh_collection_project", // Link to site (OPTIONAL)
                        info: "Worked as a Full Stack Developer on an app that helps one keep track of all the heroes summoned in Fire Emblem Heroes, a mobile game.  Developed with Python and Django."
                    },
                    {
                        text: "Fire Emblem Heroes - Orb Tracker",
                        externalLink: "https://github.com/pbarnard1/feh_orb_tracker",
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
            mainContent="Adrian graduated from The University of Arizona with a 4.0 GPA; from there, he left a blazing trail of accomplishments and successful team projects. It is just the beginning of his journey on a path that will make the world a better place." 
            audioUrl="/audio/careerhistorybackground.mp3"
            imgSource="./tutoringImage.jpg" // URL to image to display in that section
            bulletPoints={
                [
                    {
                        text: "Coding Dojo - Full-Stack Developer Certificate; Seattle, WA (2020)",
                        info: "Full-time Online Training Program in Python, Java and JavaScript (React)."
                    },
                    {
                        text: "The University of Arizona - Master of Science in Atmospheric Sciences; Tucson, AZ (2010-2012)",
                        info: "Used MATLAB to study tropical waves in the Pacific to understand how tropical cyclones form."
                    },
                    {
                        text: "University of Washington - Two Bachelor’s Degrees in Atmospheric Sciences and ACMS; Seattle, WA (2006-2010)",
                        info: "Includes courses in AMATH 301, which teaches MATLAB, CSE 142 and CSE 143, both of which teach Java."
                    },
                    {
                        text: "Private math tutor - self-employed; Seattle, WA (2012-2020)",
                        info: "Tutored over 150 students in math courses, ranging from pre-calculus to calculus to more advanced courses such as differential equations.  Tutored MATLAB."
                    },
                    {
                        text: "Teaching assistant and tutor - The University of Arizona; Tucson, AZ (2010-2012)",
                        info: "Tutored algebra through calculus at Think Tank, a center where students come for help in various subjects."
                    }
                ] 
            }
            // 
        />,
        <PortfolioSection 
            title="Skills, Attributes and Accomplishments"
            mainContent='If you asked Adrian, what was his most redeeming quality, he would immediately reply, "I am a good team player. I will do whatever is needed of me to get the job done."' 
            audioUrl="/audio/skillsspeech.mp3"
            imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg" // URL to image to display in that section
            bulletPoints={
            [
                {
                    text: "Skills",
                    info: "Programming, data analysis, mathematics, design, project management, teaching, presenting"
                },
                {
                    text: "Attributes",
                    info: "Flexible, team player, responsible, punctual, computer literate, detail-oriented, accountable, active listener, problem solver"
                },
                {
                    text: "Accomplishments",
                    info: ""
                },
                {
                    text: "Triple black belts from Coding Dojo",
                    info: "Black belts are awarded for high scores in each program."
                },
                {
                    text: "4.0 GPA at The University of Arizona",
                    info: "Earned an A in each class."
                }
            ]
        } />,
    ];

    // Array of trivia questions
    const triviaArr = [
        <TriviaQuestion question='What role did Adrian take on for his project "Fire Emblem Heroes - Hero Tracker"?'
            correctChoice="B" // A, B, C or D
            possibleAnswers={
                ["Archer", // Choice A
                "Full Stack Developer", // Choice B
                "Healer", // Choice C
                "A Broke Orb Spender"] // Choice D
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="Adrian was a scholar of which three languages at Coding Dojo?"
            correctChoice="A"
            possibleAnswers={
                ["Java, JavaScript (React), Python",
                "German, Spanish, Swahili",
                "Binary, Octal, Hexadecimal",
                "FORTRAN, BASIC, Assembly"]
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What was Adrian's GPA at The University of Arizona?"
            correctChoice="D"
            possibleAnswers={
                ["42",
                "i",
                "Over 9000",
                "4.0"]
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

*/


export default (props) => {
    const [sectionNum, setSectionNum] = useState(0);
    const [isShowButtonClicked, setIsShowButtonClicked] = useState(false);

    // Function that will reveal sections one at a time
    const addOne = () => {
        setSectionNum(sectionNum + 1);
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
                        info: "Django, Spring Boot, React, jQuery, Bootstrap, Maven, Bcrypt"
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
                        externalLink: "https://github.com/pbarnard1/feh_collection_project", // Link to site (OPTIONAL)
                        info: "Worked as a Full Stack Developer on an app that helps one keep track of all the heroes summoned in Fire Emblem Heroes, a mobile game.  Developed with Python and Django."
                    },
                    {
                        text: "Fire Emblem Heroes - Orb Tracker",
                        externalLink: "https://github.com/pbarnard1/feh_orb_tracker",
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
            mainContent="Adrian graduated from The University of Arizona with a 4.0 GPA; from there, he left a blazing trail of accomplishments and successful team projects. It is just the beginning of his journey on a path that will make the world a better place."
            audioUrl="/audio/careerhistorybackground.mp3"
            imgSource="./tutoringImage.jpg" // URL to image to display in that section
            bulletPoints={
                [
                    {
                        text: "Coding Dojo - Full-Stack Developer Certificate; Seattle, WA (2020)",
                        info: "Full-time Online Training Program in Python, Java and JavaScript (React)."
                    },
                    {
                        text: "The University of Arizona - Master of Science in Atmospheric Sciences; Tucson, AZ (2010-2012)",
                        info: "Used MATLAB to study tropical waves in the Pacific to understand how tropical cyclones form."
                    },
                    {
                        text: "University of Washington - Two Bachelor’s Degrees in Atmospheric Sciences and ACMS; Seattle, WA (2006-2010)",
                        info: "Includes courses in AMATH 301, which teaches MATLAB, CSE 142 and CSE 143, both of which teach Java."
                    },
                    {
                        text: "Private math tutor - self-employed; Seattle, WA (2012-2020)",
                        info: "Tutored over 150 students in math courses, ranging from pre-calculus to calculus to more advanced courses such as differential equations.  Tutored MATLAB."
                    },
                    {
                        text: "Teaching assistant and tutor - The University of Arizona; Tucson, AZ (2010-2012)",
                        info: "Tutored algebra through calculus at Think Tank, a center where students come for help in various subjects."
                    }
                ]
            }
        // 
        />,
        <PortfolioSection
            title="Skills, Attributes and Accomplishments"
            mainContent='If you asked Adrian, what was his most redeeming quality, he would immediately reply, "I am a good team player. I will do whatever is needed of me to get the job done."'
            audioUrl="/audio/skillsspeech.mp3"
            imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg" // URL to image to display in that section
            bulletPoints={
                [
                    {
                        text: "Skills",
                        info: "Programming, data analysis, mathematics, design, project management, teaching, presenting"
                    },
                    {
                        text: "Attributes",
                        info: "Flexible, team player, responsible, punctual, computer literate, detail-oriented, accountable, active listener, problem solver"
                    },
                    {
                        text: "Accomplishments",
                        info: ""
                    },
                    {
                        text: "Triple black belts from Coding Dojo",
                        info: "Black belts are awarded for high scores in each program."
                    },
                    {
                        text: "4.0 GPA at The University of Arizona",
                        info: "Earned an A in each class."
                    }
                ]
            } />,
    ];

    // Array of trivia questions
    const triviaArr = [
        <TriviaQuestion question='What role did Adrian take on for his project "Fire Emblem Heroes - Hero Tracker"?'
            correctChoice="B" // A, B, C or D
            possibleAnswers={
                ["Archer", // Choice A
                    "Full Stack Developer", // Choice B
                    "Healer", // Choice C
                    "A Broke Orb Spender"] // Choice D
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="Adrian was a scholar of which three languages at Coding Dojo?"
            correctChoice="A"
            possibleAnswers={
                ["Java, JavaScript, Python",
                    "German, Spanish, Swahili",
                    "Binary, Octal, Hexadecimal",
                    "FORTRAN, BASIC, Assembly"]
            }
            sectionNum={addOne} />,
        <TriviaQuestion question="What was Adrian's GPA at The University of Arizona?"
            correctChoice="D"
            possibleAnswers={
                ["42",
                    "i",
                    "Over 9000",
                    "4.0"]
            }
            sectionNum={addOne} />,
        <FeedbackSection
            imgSource="https://media4.giphy.com/media/3oz8xAK4QDq8UqLNp6/giphy.gif" // Link to image goes here
            summaryText="I hope you enjoyed the website. It was my pleasure creating it and presenting this information to you. Please feel free to contact me and leave a comment below." // Text that goes below the image 
        />
    ];

    // useEffect(() => {
    //     setSectionNum(0);
    // }, [])

    return (
        <div>
            <Header />
            {!isShowButtonClicked ?
                <button className="showBtn" onClick={openPortfolio}>Show</button> :
                sectionNum < portfolioArr.length - 1 ? portfolioArr.slice(0, sectionNum + 1) : portfolioArr
            }
            {isShowButtonClicked && triviaArr[sectionNum]}
            {isShowButtonClicked && sectionNum > portfolioArr.length - 1 && <Footer />}
        </div>
    );
}