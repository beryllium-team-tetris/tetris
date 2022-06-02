import React from 'react';
import { StyledTetrisWrapper } from '../../components/Styles/StyledTetris';
import { useScores } from '../../hooks/scores';
import { getScores } from '../../services/scores';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const { scores } = useScores();
  const topScores = scores.slice(0, 10);
  return (
    <StyledTetrisWrapper>
      <h1>Leaderboard</h1>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        {topScores.map((score) => (
          <tr key={score.id}>
            <td>
              <Link to={`/profile/${score.profile_id}`}>
                {score.profiles.username
                  ? score.profiles.username
                  : score.profiles.email}
              </Link>
            </td>
            <td>{score.score}</td>
          </tr>
        ))}
      </table>
    </StyledTetrisWrapper>
  );
}
