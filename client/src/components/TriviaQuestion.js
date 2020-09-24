import React, { useState, useEffect } from 'react';
import '../css/Trivia.css';

export default (props) => {
    const {question, correctChoice, possibleAnswers} = props; // Destructuring so we get the field names immediately
    const letterArr = ["A", "B", "C", "D"];
    const [selectedAnswers, setSelectedAnswers] = useState([false, false, false, false]);
    const [curStyles, setCurStyles] = useState(["unpicked","unpicked","unpicked","unpicked"])
    const [selectedRightAnswer, setSelectedRightAnswer] = useState(false); // Boolean for determining if user picked right answer
    const [isClickable, setIsClickable] = useState(true); // Allow each answer to be clicked
    const [countdown, setCountdown] = useState(0); // 2-second timer
    const [soundArr,setSoundArr] = useState([]);

    const randomizeAudioFiles = () => {
        let randomIntArr = [1,2,3,4,5];
        const newSoundArr = [];
        for (let k = 0; k < 4; k++) { // Pick four sound files randomly
            const randIndex = Math.floor(Math.random()*randomIntArr.length);
            const randVal = randomIntArr[randIndex];
            // console.log("Index = "+randIndex+", value = "+randVal);
            const soundUrl = "/audio/incorrect"+randVal+".mp3";
            newSoundArr.push(soundUrl);
            randomIntArr = randomIntArr.filter((val,ind) => {return ind !== randIndex});
            // console.log(randomIntArr);
        }
        setSoundArr(newSoundArr);
    }

    useEffect(() => {
        randomizeAudioFiles();
    }, []);

    const handleCorrectAnswer = (e, ind) => {
        if (isClickable) {
            let newCurStyles = [...curStyles];
            newCurStyles[ind] = "finalAnswer";
            setCurStyles(newCurStyles);
            setSelectedRightAnswer(true);
            setCountdown(2); // Two-second countdown    
        }
        console.log("Correct!!!");
    }

    const handleWrongAnswer = (e,ind) => {
        if (!selectedAnswers[ind] && isClickable) { // If answer was not selected before AND you can click on it
            console.log("WRONG!");
            let newSelectedAnswers = [...selectedAnswers];
            newSelectedAnswers[ind] = true;
            setSelectedAnswers(newSelectedAnswers);
            let newCurStyles = [...curStyles];
            newCurStyles[ind] = "finalAnswer";
            setCurStyles(newCurStyles);
            setIsClickable(false); // Temporarily stop answers from getting clicked as answer goes to orange
            setCountdown(2);
        }
    }

    const playAudio = (ind) => { // (url is in the audio tag in the HTML)
        const audioEl = document.getElementsByClassName("audio-element")[ind];
        // console.log(audioEl);
        audioEl.play();
    }

    useEffect(() => {
        countdown > 0 && setTimeout(() => setCountdown(countdown-1), 1000);
        if (countdown === 0) {
            const ind = curStyles.indexOf("finalAnswer");
            setIsClickable(true); // Make buttons clickable after countdown is over
            if (ind > -1) {
                if (selectedRightAnswer) { // Picked right answer
                    props.sectionNum(); // Increment section number (lift state here)
                    // Reset variables for next question
                    setSelectedAnswers([false, false, false, false]); // Needed for remaining sections - won't render correctly otherwise
                    // setNumPicked(0);
                    setSelectedRightAnswer(false);
                    setCurStyles(["unpicked","unpicked","unpicked","unpicked"]);
                    randomizeAudioFiles();
                } else { // Picked wrong answer
                    let newCurStyles = [...curStyles];
                    playAudio(ind); // Play audio file saying person is incorrect
                    newCurStyles[ind] = "wrongAnswer";
                    setCurStyles(newCurStyles);
                }
            }
        }
    }, [countdown]);

    // The audio HAS to be in the public folder - it does make it accessible to anyone looking, so be careful not store
    // sensitive stuff there!  For example, anybody can type url/audio/incorrect1.mp3 and they can play it for themselves.

    /*

    <audio className="audio-element">
                            <source src={soundArr[ind]} type="audio/mpeg" ></source>
                        </audio>
                        */
    // src={"audio/incorrect"+tempVal+".mp3"} seems OK mostly - still "hard-coded"
    // Hard-coding it works fine
    // Linking to an array like below:

    // const tempUrl = ["https://static.wikia.nocookie.net/feheroes_gamepedia_en/images/a/a6/VOICE_Sigurd_Destined_Duo_SPECIAL_1.wav/revision/latest?cb=20200907055835",
    // "https://static.wikia.nocookie.net/feheroes_gamepedia_en/images/e/ee/VOICE_Sigurd_Destined_Duo_RELIANCE_2.wav/revision/latest?cb=20200907055719",
    // "https://static.wikia.nocookie.net/feheroes_gamepedia_en/images/9/98/VOICE_Sigurd_Destined_Duo_SPECIAL_2.wav/revision/latest?cb=20200907055838",
    // "https://static.wikia.nocookie.net/feheroes_gamepedia_en/images/5/50/VOICE_Sigurd_Destined_Duo_RELIANCE_17.wav/revision/latest?cb=20200907055816"];

    // {tempUrl[ind]} is OK


    // To do: perhaps simplify the CSS for the hexagons for the answers
    // Get the big hexagon to work for the question
    // Align the text in the answers so it's centered vertically
    return(
        <div>
            
            <div className="hexagonQuestion"><p>{question}</p></div>
            {possibleAnswers.map((answerChoice,ind) => {
                const curLetterChoice = letterArr[ind];
                console.log(soundArr[ind]);
                return(
                    <div onClick={e => {
                        curLetterChoice === correctChoice ? handleCorrectAnswer(e,ind) : handleWrongAnswer(e,ind)
                    }} 
                        className={"hexagon "+curStyles[ind]}
                        key={ind}>
                        <audio className="audio-element">
                            <source src={soundArr[ind]} type="audio/mpeg" ></source>
                        </audio>
                        {curLetterChoice + ": " + answerChoice}
                    </div>
                );
            })}
        </div>
    )
}