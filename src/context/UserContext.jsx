import { createContext, useState } from 'react';
import { getUser } from '../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('sign-up');
  const [user, setUser] = useState(currentUser || { email: null });
  const [profileID, setProfileID] = useState('');
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        type,
        setType,
        currentUser,
        profileID,
        setProfileID,
        username,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
