import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfileById } from '../../services/profile';
import { StyledTetrisWrapper } from '../Styles/StyledTetris';

export default function Profile() {
  const [profile, setProfile] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

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

  //   useEffect(() => {
  //     const fetchScores = async () => {
  //       try {
  //         //make sure to insert proper fetch
  //         const data = await insertfetchhere();
  //         setScore(data);
  //         // setLoadingScore(false);
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     };
  //     fetchScores();
  //   }, []);

  if (loading)
    return (
      <StyledTetrisWrapper>
        <h1>Loading Profile</h1>
      </StyledTetrisWrapper>
    );

  return (
    <StyledTetrisWrapper>
      {error && <p>{error}</p>}
      <div key={profile.id}>
        <h1>{profile.name}</h1>
        <p>Username: {profile.username}</p>
        <p>Email: {profile.email}</p>
      </div>
      <div>
        <h1>Placeholder for scores</h1>
      </div>
    </StyledTetrisWrapper>
  );
}
