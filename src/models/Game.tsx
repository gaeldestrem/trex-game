import { Record } from 'immutable';

const GameRecord = Record(
  {
    counter: 0,
    createdAt: new Date(),
    obstacles: [
      { type: 'CACTUS_LARGE', x: 250, height: 64 },
      { type: 'CACTUS_SMALL', x: 500, height: 64 },
      { type: 'PTERODACTYL', x: 750, height: 64 },
      { type: 'CACTUS_LARGE', x: 1000, height: 64 }
    ],
    // /!\ y from bottom, it's reversed from the canvas logic
    trex_y: 0,
    speed: 1
  },
  'Game'
);

class Game extends GameRecord {
  public hasCollision(): boolean {
    return !!this.obstacles.find(
      obstacle => obstacle.x === this.counter && this.trex_y === 0
    );
  }

  public incrementCounter(): Game {
    return this.merge({ counter: this.counter + 1 });
  }

  public incrementTrexY(): Game {
    return this.merge({ trex_y: this.trex_y + 2 });
  }

  public decrementTrexY(): Game {
    return this.merge({ trex_y: this.trex_y - 2 });
  }
}

export default Game;
