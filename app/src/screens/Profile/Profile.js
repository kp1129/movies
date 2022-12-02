import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/Nav/Nav";
import Plans from "../../components/Plans/Plans";
import { selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="profile__contents">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            className="profile__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user avatar"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
