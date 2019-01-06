import React, { Component } from 'react';

interface Config {
  canvas: {
    width: number;
    height: number;
    paddingY: number;
    paddingX: number;
  };
}

const defaultState: Config = {
  canvas: {
    width: 700,
    height: 500,
    paddingY: 100,
    paddingX: 100
  }
};

const AppContext = React.createContext(defaultState);

class AppContextProvider extends React.Component<{ children: any }, {}> {
  public state = defaultState;

  public render() {
    const { children } = this.props;

    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    );
  }
}

export { AppContextProvider, AppContext };
