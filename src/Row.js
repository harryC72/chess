import React from 'react';
import { Tyle } from './Tyle';

export const Row = ({ order }) => {
  var rows = [];
  let color;
  let background;
  for (var i = 0; i < 10; i++) {
    if (order === 'true') {
      if (i % 2 === 0) {
        color = 'black';
        background = 'black';
      } else {
        color = 'white';
        background = 'white';
      }
    } else {
      if (i % 2 === 0) {
        color = 'white';
        background = 'white';
      } else {
        color = 'black';
        background = 'black';
      }
    }

    rows.push(<Tyle key={i} background={background} color={color} />);
    color = undefined;
    background = undefined;
  }
  return <div style={{ display: 'flex', flexDirection: 'row' }}>{rows}</div>;
};
