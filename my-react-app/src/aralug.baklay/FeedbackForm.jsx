import React, { useState } from 'react';

const FeedbackForm = ({ onAddFeedback }) => {
  const [subject, setSubject] = useState('Math');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment) return;

    onAddFeedback({ subject, rating, comment });
    setRating('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <label>
        Subject:
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option>Math📕</option>
          <option>Physics📗</option>
          <option>History📘</option>
        </select>
      </label>
      <br />
      <label>
        Rating (1-5):
        <input
          type="number"
          value={rating}
          min="1"
          max="5"
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Қосу</button>
    </form>
  );
};

export default FeedbackForm;
