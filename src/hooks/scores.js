import { useEffect, useState } from 'react';

import { getScores } from '../services/scores';

export function useScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getScoreData = async () => {
      try {
        const scoreList = await getScores();
        console.log('scoreList', scoreList);
        setScores(scoreList);
      } catch (err) {
        console.log(err);
      }
    };
    getScoreData();
  }, []);

  return { scores };
}
