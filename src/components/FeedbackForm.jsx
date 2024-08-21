import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/feedback', { feedback });
      console.log('Feedback submitted:', response.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        name="feedback"
        placeholder="Your Feedback"
        value={feedback}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded w-full"
        rows="4"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
