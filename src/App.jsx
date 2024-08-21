import React from "react";

import BookingForm from "./components/BookingForm";
import DocumentUpload from "./components/DocumentUpload";
import FeedbackFrom from "./components/FeedbackForm";
import SocialMediaShare from "./components/SocialMediaShare";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BookingForm />
        <DocumentUpload />
        <FeedbackFrom />
        <SocialMediaShare />
      </header>
    </div>
  );
}

export default App;
