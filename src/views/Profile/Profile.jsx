import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fetchProfileById } from '../../services/profile';
import { deleteScore, fetchScoresByProfileId } from '../../services/scores';
import { StyledTetrisWrapper } from '../../components/Styles/StyledTetris';
import { useAuth } from '../../hooks/user';
import {
  StyledProfile,
  StyledScore,
} from '../../components/Styles/StyledProfile';

export default function Profile() {
  const [profile, setProfile] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingScore, setLoadingScore] = useState(true);
  const [scores, setScores] = useState([]);
  const params = useParams();
  const { id } = useParams();
  const history = useHistory();
  const { profileID } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProfileById(id);
        setProfile(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const data = await fetchScoresByProfileId(id);
        setScores(data);
        setLoadingScore(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchScores();
  }, [id]);

  if (loading)
    return (
      <StyledTetrisWrapper>
        <h1>Loading Profile</h1>
      </StyledTetrisWrapper>
    );

  if (loadingScore)
    return (
      <StyledTetrisWrapper>
        <h1>Loading Scores</h1>
      </StyledTetrisWrapper>
    );

  return (
    <StyledProfile>
      {error && <p>{error}</p>}
      <div key={profile.id}>
        <h1>{profile.name}</h1>
        <p>Username: {profile.username}</p>
        <p>Email: {profile.email}</p>
        {profileID === Number(id) && (
          <Link to={`/profile/${params.id}/edit`}>
            <button>Edit Profile</button>
          </Link>
        )}
      </div>
      <div>
        <h1>All Your Scores</h1>
        <ol>
          {scores.map((score) => (
            <li key={score.id}>
              <StyledScore>{`Score: ${score.score}`}</StyledScore>
              <p>{`Date: ${new Date(score.created_at).toDateString()}`}</p>
              {profileID === score.profile_id && (
                <button
                  onClick={async () => {
                    await deleteScore(score.id);
                    setScores(
                      scores.filter((points) => points.id !== score.id)
                    );
                  }}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </StyledProfile>
  );
}
