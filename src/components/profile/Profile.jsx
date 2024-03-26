import React from 'react';
import { RxAvatar } from 'react-icons/rx'
import './profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {

  const {user} = useSelector(state=>state.user);

  
  return (
    <div className="profile-container">
      <div className="avatar">
        <div className="dummy-avatar">
          <RxAvatar/>
        </div>
      </div>
      <div className="profile-info">
        <h2>User Profile</h2>
        <div className="user-details">
          <p><span>Username:</span> {user.username}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Score:</span> {user.score}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
