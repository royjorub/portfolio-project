import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Feedback.css';

export default (props) => {
    const { imgSource, summaryText } = props;
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    // On page load ONLY, retrieve the messages from the database
    useEffect(() => {
        axios.get("http://localhost:8000/api/comments")
            .then(res => {
                setComments(res.data); // Get list of comments and set it
                // setIsLoaded(true); // Data loaded successfully
            })
    }, [comments])

    const handleForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/comments/new',
            { name, comment })
            .then(res => {
                console.log("Successful submission");
                console.log(res);
                setIsFormSubmitted(true);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // Set Errors
                setErrors(errorResponse);
            });
    }

    return (
        <div className="bttm-container">

            <div class="example1">
                <h3>{summaryText} </h3>
            </div>

            <audio className="audio-element" autoPlay="true">
                {/* Here you will change the name of the audio file */}
                <source src="/audio/thankyoufortakingthetime.mp3" type="audio/mpeg"></source>
            </audio>

            <div className="prevFeedback">
                <h2>Feedback:</h2>
                {comments.map((item, ind) => {
                    return (
                        <div>
                            <span style={{ fontWeight: "bold" }}>{item.name} :</span> <span>{item.comment}</span>
                        </div>

                    );
                })}
            </div>
            {isFormSubmitted ?
                <h3 style={{ paddingBottom: "10px" }}>Thank you for your feedback!</h3> :
                <form style={{ marginBottom: "20px" }} onSubmit={handleForm}>
                    <p>
                        <input placeholder="Name" className="nameInput" type="text" onChange={(e) => setName(e.target.value)} /><br />
                        {errors?.name && <span style={{ color: "red" }}>{errors.name?.message}</span>}
                    </p>
                    <p>
                        <textarea placeholder="Comment" className="textInput" rows="5" cols="60" onChange={(e) => setComment(e.target.value)} /><br />
                        {errors?.comment && <span style={{ color: "red" }}>{errors.comment?.message}</span>}
                    </p>
                    <button className="commentBtn" type="submit">Submit</button>
                </form>
            }


        </div>
    );
}