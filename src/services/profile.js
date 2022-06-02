import { client, parseData } from './client';

export async function fetchProfileById(id) {
  const data = await client.from('profiles').select('*').match({ id }).single();

  return parseData(data);
}

export async function fetchProfileByUserId(user_id) {
  const data = await client
    .from('profiles')
    .select('*')
    .match({ user_id })
    .single();

  return parseData(data);
}

export async function createProfile(profile) {
  const data = await client.from('profiles').insert(profile);

  return parseData(data);
}
