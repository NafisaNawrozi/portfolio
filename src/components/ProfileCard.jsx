import React from 'react';

const ProfileCard = ({ owner }) => {
  return (
    <aside className="profile card" id="profileCard">
      <img className="profile-photo" src={owner.photoSrc} alt="Profile photo" />
      <h3 className="profile-title">{owner.title}</h3>
      <p className="profile-bio">{owner.bio}</p>
    </aside>
  );
};

export default ProfileCard;