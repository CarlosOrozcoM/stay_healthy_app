import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Notification.css";

const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
//  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const DoctorDataKey = Object.keys(localStorage);
    const storedAppointmentData = JSON.parse(localStorage.getItem(DoctorDataKey));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {appointmentData?.[0]?.doctorName} <br/>
                <strong>Speciality:</strong> {appointmentData?.[0]?.doctorSpeciality}<br/>
                <strong>Name:</strong> {appointmentData?.[0]?.name}<br/>
                <strong>Phone:</strong> {appointmentData?.[0]?.phoneNumber}<br/>
                <strong>Date:</strong> {appointmentData?.[0]?.date}<br/>
                <strong>Time:</strong> {appointmentData?.[0]?.time}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Notification;
