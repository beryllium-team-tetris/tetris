import { client } from './client';
import { createProfile } from './profile';

export function getUser() {
  return client.auth.user();
}

export function getSession() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  const profile_resp = await createProfile({
    email,
    user_id: user.id,
    username: '',
    name: '',
  });
  if (error) throw error;
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}

export async function signOutUser() {
  return client.auth.signOut();
}
