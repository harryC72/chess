import React from 'react';
import { Row } from './Row';
import { v4 as uuidv4 } from 'uuid';

export const Chessboard = () => {
  let chessboard = [];

  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      chessboard.push(<Row order='true' key={uuidv4()} />);
    } else {
      chessboard.push(<Row order='false' key={uuidv4()} />);
    }
  }
  return <div style={{ zIndex: 100, position: 'relative' }}>{chessboard}</div>;
};
