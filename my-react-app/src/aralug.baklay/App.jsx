import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import './App.css';

const App = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleAddFeedback = (feedback) => {
    setFeedbackList([...feedbackList, feedback]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1> ✅ Student Feedback App</h1>
      <FeedbackForm onAddFeedback={handleAddFeedback} />
      <FeedbackList feedbackList={feedbackList} />
    </div>
  );
};

export default App;

