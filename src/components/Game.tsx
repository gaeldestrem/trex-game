import React, { Component } from 'react';
import { Layer, Text } from 'react-konva';
import { TREX } from '../constants';
import { AppContext } from '../context/AppContext';
import GameModel from '../models/Game';
import Background from './Background';
import Sprite from './Sprite';
import Trex from './Trex';

class Game extends React.Component<{}, { game: GameModel }> {
  public interval: any = null;
  public jumpInterval: any = null;
  public state = { game: new GameModel() };

  public componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  public onKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    const { game } = this.state;

    if (e.code === 'ArrowUp' || e.code === 'Space') {
      if (game.counter === 0) {
        this.startGame();
      } else {
        this.onJump();
      }
    }
  };

  public startGame() {
    const counterFrame = () => {
      const { game } = this.state;

      if (game.hasCollision()) {
        this.gameOver();
      } else {
        this.setState(({ game: gameState }) => ({
          game: gameState.incrementCounter()
        }));
        this.interval = requestAnimationFrame(counterFrame);
      }
    };
    this.interval = requestAnimationFrame(counterFrame);
  }

  public gameOver() {
    cancelAnimationFrame(this.interval);
    // tslint:disable-next-line
      console.log('GAME OVER');
  }

  public onJump() {
    // If already jumping, do nothing
    if (this.jumpInterval) {
      return;
    }

    const originalCounter = this.state.game.counter;

    const onJump = () => {
      const { game } = this.state;

      if (game.counter - originalCounter < 100) {
        this.setState(({ game: stateGame }) => ({
          game: stateGame.incrementTrexY()
        }));
        this.jumpInterval = requestAnimationFrame(onJump);
      } else if (game.counter - originalCounter < 199) {
        this.setState(({ game: stateGame }) => ({
          game: stateGame.decrementTrexY()
        }));
        this.jumpInterval = requestAnimationFrame(onJump);
      } else {
        cancelAnimationFrame(this.jumpInterval);
        this.jumpInterval = null;
      }
    };
    this.jumpInterval = requestAnimationFrame(onJump);
  }

  public render() {
    const { game } = this.state;

    return (
      <AppContext.Consumer>
        {({ canvas: { width, height, paddingY, paddingX } }) => (
          <Layer>
            <Text
              text={`Counter: ${game.counter}`}
              x={width - paddingX}
              y={paddingY}
            />
            <Trex
              counter={game.counter}
              x={0}
              y={height - paddingY - game.trex_y - TREX.DEFAULT.height}
            />
            <Background counter={game.counter * game.speed} />
            {game.obstacles.map(obstacle => {
              const x = obstacle.x - game.counter;

              // Only display visible items for performances
              return x > -paddingY && x <= width ? (
                <Sprite
                  x={x}
                  animation={obstacle.type}
                  y={height - paddingY - obstacle.height}
                />
              ) : null;
            })}
          </Layer>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Game;
