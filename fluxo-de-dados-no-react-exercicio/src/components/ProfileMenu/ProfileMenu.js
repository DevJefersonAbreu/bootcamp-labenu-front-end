// ProfileMenu.js
import React from 'react';
import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from './ProfileMenu.styled';

const ProfileMenu = ({ name, bio, imageUrl }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={imageUrl} alt="Profile Image" />
      <ProfileName>{name}</ProfileName>
      <ProfileBio>{bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
