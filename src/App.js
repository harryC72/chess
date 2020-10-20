import React, { useState, useCallback } from 'react';
import Screen from './Screen';
import { Chessboard } from './Chessboard';
import { Cube } from './Cube';
import { InputForm } from './InputForm';

const KEY = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

function App() {
  const [size, setSize] = useState(0);
  const [steps, setSteps] = useState(0);

  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const canvasSize = steps * 39;

  const handleKeyDown = useCallback(
    (e) => {
      console.log('pressed');
      switch (e.keyCode) {
        case KEY.UP:
          console.log('up');
          setCoordinates({
            ...coordinates,
            x: coordinates.x,
            y:
              coordinates.y > 0 && coordinates.y < canvasSize
                ? coordinates.y - 39
                : (coordinates.y = 0),
          });
          break;
        case KEY.DOWN:
          console.log('down');
          setCoordinates({
            ...coordinates,
            x: coordinates.x,
            y:
              coordinates.y < canvasSize - 39
                ? coordinates.y + 39
                : (coordinates.y = canvasSize - 39),
          });
          break;
        case KEY.LEFT:
          console.log('left');
          setCoordinates({
            ...coordinates,
            x:
              coordinates.x > 0 && coordinates.x < canvasSize
                ? coordinates.x - 39
                : (coordinates.x = 0),
            y: coordinates.y,
          });
          break;
        case KEY.RIGHT:
          console.log('right');
          setCoordinates({
            ...coordinates,
            x:
              coordinates.x < canvasSize - 39
                ? coordinates.x + 39
                : (coordinates.x = canvasSize - 39),
            y: coordinates.y,
          });
          break;
        default:
          console.log('No key press');
      }
    },

    [canvasSize, coordinates]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleValues = (inputValues) => {
    setSize(inputValues.size);
    setSteps(inputValues.steps);
  };

  return (
    <div>
      <InputForm onValueChanges={handleValues} />
      <Screen
        width={canvasSize}
        height={canvasSize}
        ratio={window.devicePixelRatio || 1}
        onKeyDown={handleKeyDown}
      >
        <Cube
          x={coordinates.x}
          y={coordinates.y}
          height={canvasSize}
          width={canvasSize}
        />
      </Screen>
      <Chessboard size={size} />
    </div>
  );
}

export default App;
