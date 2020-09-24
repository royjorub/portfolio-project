import React, {useState} from 'react';
import './App.css';
import MainPage from './views/MainPage';
import LoadingAnimation from './components/LoadingAnimation';
// import Header from './views/Header';
// import Footer from './views/Footer';
// import ThankYou from './components/ThankYouAnimation';

// Tural's
function App() {
    const [animation, setAnimation] = useState(0);
  
    setTimeout(function () { setAnimation(1) }, 2500);
  
    if (animation === 0) {
        return (
            <div className="App">
                <LoadingAnimation />
            </div>
        );
    }
    /*
    <Header />
    <Footer />
    <ThankYou />
    */
    return (
        <div className="App">
            <MainPage />
        </div>
    );
}

// function App() {
//     return (
//         <div className="App">
//             <MainPage />
//         </div>
//     );
// }

export default App;

// From Tural:

/*
import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingAnimation from './components/LoadingAnimation';
import Header from './views/Header'



function App() {
    const [animation, setAnimation] = useState(0)

    setTimeout(function () { setAnimation(1) }, 2500);

    // Show animation page for 2.5 seconds
    if (animation === 0) {
        return(
            <div className="App">
                <LoadingAnimation />
            </div>
        );
    }

    // After animation is over, load the main page
    return(
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
*/