import { client, parseData } from './client';

export async function getScores() {
  const resp = await client
    .from('scores')
    .select('*, profiles (username)')
    .order('score', { ascending: false });
  return parseData(resp);
}

export async function insertScore({ score, profile_id }) {
  const resp = await client.from('scores').insert({ score, profile_id });
  return parseData(resp);
}
