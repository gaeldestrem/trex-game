import React, { Component } from 'react';
import Sprite from './Sprite';

class Trex extends React.Component<{ x: number; y: number; counter: number }> {
  public render() {
    const { counter, x, y } = this.props;
    if (counter === 0) {
      return <Sprite animation="TREX" x={x} y={y} />;
    }

    return (
      <Sprite
        animation="TREX_WALKING"
        frameRate={2}
        frameIndex={0}
        x={x}
        y={y}
      />
    );
  }
}

export default Trex;
