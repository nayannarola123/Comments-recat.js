import React from "react";
import { useState } from "react";
import "./CommentReview.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const CommentReview = () => {

    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submitValue, setSubmitValue] = useState([]);

    const handleStarsClick = (index) => {
        setRating(index + 1);
    };

    const handleCommentsChange = (event) => {
        setComment(event.target.value);
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSubmitValue = {
            name,
            comment,
            rating
        };
        setSubmitValue([...submitValue, newSubmitValue]);
        setName('');
        setComment('');
        setRating(0);
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <img  src="https://cdn.togetherv.com/instagram-themed-photo-booth-main_1680773792.webp" alt="" className="mb-3" />
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control mb-3" id="name" aria-describedby="nameHelp" placeholder="Enter Your Name...." value={name} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment" className="form-label">Comment</label>
                                        <textarea className="form-control mb-3" id="comment" placeholder="Enter Someting here...." rows="3" value={comment} onChange={handleCommentsChange}>
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Rating</label>
                                        <div className="rating mb-3 d-flex justify-content-center">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index} className={`star ${index < rating ? 'filled' : ''}`} onClick={() => handleStarsClick(index)}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-3">
                                        Submit
                                    </button>
                                </form>
                                <div className="submitted-feedback">
                                    <h3>Your Submitted Feedback</h3>
                                    {submitValue.length > 0 ? (
                                        submitValue.map((submitValue, index) => (
                                            <div key={index} className="feedback-item">
                                                <p>Name:- {submitValue.name}</p>
                                                <p>Comment:- {submitValue.comment}</p>
                                                <p>Rating:- {submitValue.rating} Stars</p>
                                                <hr />
                                            </div>
                                        ))
                                    ) : (
                                        <h6>No feedback submitted yet.</h6>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CommentReview;