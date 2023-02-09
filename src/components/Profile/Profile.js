import React from "react";
import './Profile.css'

function Profile() {
    return (
        <div className="profile-container">
            <div className="big-pic">
                <img className='profilePic' src='/images/Instagramx.jpg' alt="error"></img>
            </div>
            <div className="pro-info">
                <span>
                    <strong>Profile Name </strong>
                    <button>Edit Profile</button>
                    <img className='igSettingsIcon' src='/images/igsettingsicon.jpg' alt="error"></img>
                </span>
                <div>
                    <button className="fTypes">100 Posts</button>
                    <button className="fTypes">1000 Followers</button>
                    <button className="fTypes">1000 Following</button>
                </div>
                <p>
                    La Vie Est Drole
                </p>
            </div>
        </div>
    )
}
export default Profile;