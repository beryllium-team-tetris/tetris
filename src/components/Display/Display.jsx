import React from 'react';
import { StyledDisplay } from '../Styles/StyledDisplay';

export default function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}
