import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileForm from './ProfileForm';

export default function CreateProfile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //make sure to insert proper fetch
      await createProfileplaceholder({ username, email, name });
      setMessage('Profile Successfully Created');
      setTimeout(() => history.push('/'), 2500);
    } catch (error) {
      setError('Make Sure To Fill In All Of The Fields');
    }
  };

  return (
    <div>
      {message}
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
