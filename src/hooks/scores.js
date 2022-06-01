import { useEffect, useState } from 'react';

import { getScores } from '../services/scores';

export function useScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getScoreData = async () => {
      try {
        const scoreList = await getScores();
        setScores(scoreList);
      } catch (err) {
        setError(err.message);
      }
    };
    getScoreData();
  }, []);

  return { scores };
}
