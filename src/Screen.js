import React from 'react';

export const CanvasContext = React.createContext('default');

export default class Screen extends React.Component {
  state = { context: null };
  canvas = React.createRef();
  componentDidMount() {
    this.setState({ context: this.canvas.current.getContext('2d') });
  }
  render() {
    return (
      <div>
        <canvas
          id='myCanvas'
          ref={this.canvas}
          width={this.props.width}
          height={this.props.height}
          style={{
            border: '4px solid yellow',
            zIndex: 1000,
            position: 'absolute',
          }}
        />
        {this.state.context && (
          <CanvasContext.Provider value={this.state.context}>
            {this.props.children}
          </CanvasContext.Provider>
        )}
      </div>
    );
  }
}
