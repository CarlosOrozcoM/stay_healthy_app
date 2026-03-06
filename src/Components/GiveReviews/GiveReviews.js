// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './GiveReviews.css'; // Importing CSS for styling


const GiveReviews = ({doctor, onClose}) => {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
    doctorId: doctor.id 
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleRatingChange = (newRating) => {
        setFormData({ ...formData, rating: newRating });
    };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([...existingReviews, formData]));
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0,
      doctorId: doctor.id 
    });
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      
      <h2>Form with Message</h2>
      {!showForm ? (
        // Display button to open the form
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback for {doctor.name}</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} required/>
          </div>
                <div className="form-group_rating">
                    <label htmlFor="rating">Rating:</label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{
                            cursor: 'pointer',
                            fontSize: '35px',
                            color: star <= formData.rating ? '#ffd700' : '#e4e4e4'
                    }}
                    onClick={() => handleRatingChange(star)}
                    >
                    ★
                    </span>
                    ))}
                </div>
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="close-button" onClick={onClose}>Close</button>
        </form>
      )}
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p><strong>User:</strong> {submittedMessage.name}</p>
          <p><strong>Review:</strong> {submittedMessage.review}</p>
          <p><strong>Rating:</strong> {submittedMessage.rating} stars</p>
        </div>
      )}
    </div>
  );
};

export default GiveReviews;

