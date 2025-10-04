import React from 'react';

const FeedbackList = ({ feedbackList }) => {
  if (feedbackList.length === 0) {
    return <p>Әзірге пікірлер жоқ.</p>;
  }

  return (
    <div>
      <h2>Пікірлер тізімі:</h2>
      <ul>
        {feedbackList.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>{item.subject}</strong> - Баға: {item.rating} <br />
            Пікір: {item.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
