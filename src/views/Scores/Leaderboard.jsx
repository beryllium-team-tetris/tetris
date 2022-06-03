import React from 'react';
import { useScores } from '../../hooks/scores';
import { Link } from 'react-router-dom';
import {
  StyledHeading,
  StyledLeaderboard,
  StyledScore,
  StyledUsername,
} from '../../components/Styles/StyledLeaderboard';

export default function Leaderboard() {
  const { scores } = useScores();
  const topScores = scores.slice(0, 10);
  return (
    <StyledLeaderboard>
      <StyledHeading>Leaderboard</StyledHeading>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {topScores.map((score) => (
            <tr key={score.id}>
              <StyledUsername className="username">
                <Link to={`/profile/${score.profile_id}`}>
                  {score.profiles.username
                    ? score.profiles.username
                    : score.profiles.email}
                </Link>
              </StyledUsername>
              <StyledScore className="score">{score.score}</StyledScore>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledLeaderboard>
  );
}
