import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Feedback.css';

export default (props) => {
    const {imgSource, summaryText} = props;
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    // On page load ONLY, retrieve the messages from the database
    useEffect(() => {
        axios.get("http://localhost:8000/api/comments")
            .then(res=>{
                setComments(res.data); // Get list of comments and set it
                // setIsLoaded(true); // Data loaded successfully
            })
    }, [comments])

    const handleForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/comments/new', 
            {name, comment})
            .then(res=> {
                console.log("Successful submission");
                console.log(res);
                setIsFormSubmitted(true);
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setErrors(errorResponse);
            });
    }

    return(
        <div>
            <img style={{border: "2px solid black"}} src={imgSource} alt="SectionImage" width="200" height="200"></img>
            <p>{summaryText}</p>
            <h3>Feedback:</h3>
            <audio className="audio-element" autoPlay="true">
                {/* Here you will change the name of the audio file */}
                <source src="/audio/thankyoufortakingthetime.mp3" type="audio/mpeg"></source>
            </audio>
            
            <div className="prevFeedback">
            {comments.map((item,ind) => {
                return(
                    <p>{item.name}: {item.comment}</p>
                )
            })}
            </div>
            {isFormSubmitted ? 
                <h3>Thank you for your feedback!</h3> :
                <form onSubmit={handleForm}>
                    <p>
                        <label htmlFor="name">Name:</label><br/>
                        <input type="text" onChange = {(e)=>setName(e.target.value)}/><br/>
                        {errors?.name && <span style={{color: "red"}}>{errors.name?.message}</span>}
                    </p>
                    <p>
                        <label htmlFor="comment">Comment:</label><br/>
                        <textarea rows="5" cols="60" onChange = {(e)=>setComment(e.target.value)}/><br/>
                        {errors?.comment && <span style={{color: "red"}}>{errors.comment?.message}</span>}
                    </p>
                    <button type="submit">Submit</button>
                </form>
            }
            

        </div>
    );
}