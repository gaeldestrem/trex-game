import React, { Component } from 'react';
import { Stage } from 'react-konva';
import { AppContext, AppContextProvider } from '../context/AppContext';
import Game from './Game';

class App extends React.Component {
  public render() {
    return (
      <AppContextProvider>
        <AppContext.Consumer>
          {({ canvas: { width, height } }) => (
            <Stage width={width} height={height}>
              <Game />
            </Stage>
          )}
        </AppContext.Consumer>
      </AppContextProvider>
    );
  }
}

export default App;
