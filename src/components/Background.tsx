import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import Sprite from './Sprite';

class Background extends React.Component<{ counter: number }, any> {
  public render() {
    const { counter } = this.props;

    return (
      <AppContext.Consumer>
        {({ canvas: { width, height, paddingY } }) => {
          const rest = counter % width;

          return (
            <React.Fragment>
              <Sprite animation="HORIZON" x={0 - rest} y={height - paddingY} />
              <Sprite
                animation="HORIZON"
                x={width - rest}
                y={height - paddingY}
              />
            </React.Fragment>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Background;
