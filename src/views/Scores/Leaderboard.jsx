import React from 'react';
import { StyledTetrisWrapper } from '../../components/Styles/StyledTetris';
import { useScores } from '../../hooks/scores';
import { getScores } from '../../services/scores';

export default function Leaderboard() {
  const { scores } = useScores();
  const topScores = scores.slice(0, 10);
  return (
    <StyledTetrisWrapper>
      <h1>Leaderboard</h1>

      <ol>
        {topScores.map((score) => (
          <li key={score.id}>{`${score.profiles.username} ${score.score}`}</li>
        ))}
      </ol>
    </StyledTetrisWrapper>
  );
}
