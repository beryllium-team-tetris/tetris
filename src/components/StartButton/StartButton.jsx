import React from 'react';
import { StyledStartButton } from '../Styles/StyledStartButton';

export default function StartButton({ callback, paused=false }) {
  return <StyledStartButton onClick={callback}>Start</StyledStartButton>;
}
