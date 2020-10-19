import React from 'react';
import { CanvasContext } from './Screen';
import requestAnimationFrame from './utils/requestAnimationFrame';

export const Cube = ({ x, y, width, height }) => {
  console.log(width, height);
  return (
    <CanvasContext.Consumer>
      {(ctx) => {
        const drawIt = () => {
          requestAnimationFrame(drawIt);
          ctx.clearRect(0, 0, width, height);
          ctx.fillStyle = 'yellow';
          ctx.fillRect(x, y, 39, 39);
          ctx.stroke();
        };
        window.requestAnimationFrame(drawIt);
      }}
    </CanvasContext.Consumer>
  );
};
