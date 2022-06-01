import { client } from './client';

export function getUser() {
    return client.auth.user();
}

export function getSession() {
    return client.auth.session();
}

export async function signUpUser(email, password) {
    const { user, error } = await client.auth.signUp({ email, password });
    console.log('sign-up', user)
    if (error) throw error;
    return user;
}

export async function signInUser(email, password) {
    const { user, error } = await client.auth.signIn({ email, password });
    console.log('sign-in', user)
    if (error) throw error;
    return user;
}

export async function signOutUser() {
    return client.auth.signOut();
}