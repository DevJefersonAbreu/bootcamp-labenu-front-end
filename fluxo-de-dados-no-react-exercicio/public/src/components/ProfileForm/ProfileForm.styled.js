// ProfileForm.js
import React, { useState } from 'react';
import { Button, Form, FormWrapper, Input, InputWrapper, Label } from './ProfileForm.styled';

const ProfileForm = ({ name: initialName, setName, bio: initialBio, setBio, imageUrl: initialImageUrl, setImageUrl }) => {
  const [name, setLocalName] = useState(initialName);
  const [bio, setLocalBio] = useState(initialBio);
  const [imageUrl, setLocalImageUrl] = useState(initialImageUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(name);
    setBio(bio);
    setImageUrl(imageUrl);
  };

  return (
    <FormWrapper>
      <h1>Edit your profile</h1>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setLocalName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            id="bio"
            value={bio}
            onChange={(e) => setLocalBio(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setLocalImageUrl(e.target.value)}
          />
        </InputWrapper>
        <Button type="submit">Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
