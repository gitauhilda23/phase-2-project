import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    payment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/book', formData);
      console.log('Booking successful:', response.data);
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        name="dates"
        placeholder="Booking Dates"
        value={formData.dates}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        name="payment"
        placeholder="Payment Details"
        value={formData.payment}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
