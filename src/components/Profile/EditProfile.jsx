import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProfileById, updateProfile } from '../../services/profile';
import ProfileForm from './ProfileForm';

export default function EditProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        //make sure to insert proper fetch
        const data = await fetchProfileById(id);
        setName(data.name);
        setEmail(data.name);
        setUsername(data.name);
      } catch (error) {
        setError('Issue with fetching profile.');
      }
    };
    fetchProfile();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //make sure to properly fill in the fetch
      await updateProfile({ id, username, email, name });
      setMessage('Profile Was Edited Successfully');
      setTimeout(() => history.push(`/profile/${id}`), 3500);
    } catch (error) {
      setError('Editing Failed');
    }
  };

  return (
    <div>
      {message}
      Edit Your Profile.
      {error && <p>{error}</p>}
      <ProfileForm
        {...{
          username,
          name,
          email,
          setUsername,
          setName,
          setEmail,
          handleSubmit,
        }}
      />
    </div>
  );
}
