import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { fetchProfileByUserId } from '../services/profile';
import { signUpUser, signInUser, signOutUser } from '../services/users';

export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a useProvider');
  }

  const {
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
  } = context;

  const isLoggedIn = user?.email;

  useEffect(() => {
    const getProfileData = async () => {
      if (isLoggedIn) {
        console.log('user.id', user.id);
        try {
          const profileData = await fetchProfileByUserId(user.id);
          console.log('profileData', profileData);
          setProfileID(profileData.id);
          setUsername(profileData.username);
        } catch (error) {
          setError(error.message);
        }
      }
    };
    getProfileData();
  }, [user]);

  const login = async (email, password) => {
    const authenticatedUser = await signInUser(email, password);
    setUser(authenticatedUser);
  };

  const signUp = async (email, password) => {
    const newUser = await signUpUser(email, password);
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser({ email: null });
    signOutUser();
  };

  return {
    user,
    isLoggedIn,
    signUp,
    login,
    logout,
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
    username,
  };
};
