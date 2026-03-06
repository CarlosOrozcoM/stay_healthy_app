import React, { useEffect, useState } from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileForm from '../ProfileForm/ProfileForm';
import ReportLayout from "../ReportsLayout/ReportsLayout";

// import './Profile.css'; 

const Profile = () => {
    const [showProfileForm, setShowProfileForm] = useState(false);

    const handleEnterProfileCardClick = () => {
        setShowProfileForm(true);
    };

    const handleCloseProfileForm = () => {
        setShowProfileForm(false);
    };

    return (
        <div className="profile-container">
            {showProfileForm ? (
                <ProfileForm onClose={handleCloseProfileForm} />
            ) : (
                <ProfileCard onClick={handleEnterProfileCardClick} />
            )}
        </div>
    );
};

export default Profile;