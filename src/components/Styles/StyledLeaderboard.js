import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLeaderboard = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgb(0, 0, 0);
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: x-large;
  padding-top: 25px;
`;

export const StyledScore = styled.td`
  color: green;
`;

export const StyledUsername = styled.td`
  color: blueviolet;
`;

export const StyledHeading = styled.h1`
  color: red;
`;
