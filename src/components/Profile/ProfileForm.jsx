import React from 'react';

export default function ProfileForm({
  username,
  setUsername,
  email,
  setEmail,
  name,
  setName,
  handleSubmit,
}) {
  return (
    <form>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button onClick={handleSubmit}>Save</button>
    </form>
  );
}
