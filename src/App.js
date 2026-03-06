import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import components for routing from react-router-dom library
import LandingPage from './Components/LandingPage/LandingPage';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation'; // Import the BookingConsultation component
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ReportLayout from './Components/ReportsLayout/ReportsLayout';
import ProfileForm from './Components/ProfileForm/ProfileForm';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  // Render the main App component
  return (
    <div className="App">


        <BrowserRouter>
          {/*<Navbar/> */}
          <Notification/>
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/booking-consultation" element={<BookingConsultation />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/report" element={<ReportLayout />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
