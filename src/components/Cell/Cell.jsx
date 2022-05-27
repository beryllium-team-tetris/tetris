import React from 'react';
import { StyledCell } from '../../Styles/StyledCell';
// import { TETROMINOS } from '../../utils/tetrominos';

export default function Cell({ type }) {
  return (
    <StyledCell type={type} color={'red'}>
      Cell
    </StyledCell>
  );
}
