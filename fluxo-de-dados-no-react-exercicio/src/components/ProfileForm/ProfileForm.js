// ProfileScreen.js (Assuming it's the container)
import React, { useState } from 'react';
import ProfileMenu from '../components/ProfileMenu/ProfileMenu';
import ProfileForm from '../components/ProfileForm/ProfileForm';

const ProfileScreen = () => {
  const [name, setName] = useState('Astrodev');
  const [bio, setBio] = useState('Dev Full Stack');
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/200');

  return (
    <div style={{ display: 'flex' }}>
      <ProfileMenu name={name} bio={bio} imageUrl={imageUrl} />
      <ProfileForm 
        name={name} setName={setName}
        bio={bio} setBio={setBio}
        imageUrl={imageUrl} setImageUrl={setImageUrl}
      />
    </div>
  );
};

export default ProfileScreen;
