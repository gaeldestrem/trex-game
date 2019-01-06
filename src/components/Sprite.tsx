import React, { Component } from 'react';
import { Sprite as KonvaSprite } from 'react-konva';
import sprite from '../assets/sprite.png';
import { BACKGROUND, OBSTACLES, TREX } from '../constants';

class Sprite extends React.Component<
  {
    animation: string;
    x: number;
    y: number;
    frameIndex?: number;
    frameRate?: number;
  },
  any
> {
  public state = {
    image: new (window as any).Image()
  };

  public componentDidMount() {
    this.state.image.src = sprite;
  }

  public render() {
    const { animation, x, y, frameIndex, frameRate } = this.props;

    return (
      <KonvaSprite
        ref={(node: any) => {
          if (node) {
            node.start();
          }
        }}
        image={this.state.image}
        animation={animation}
        x={x}
        y={y}
        frameIndex={frameIndex}
        frameRate={frameRate}
        animations={
          // x,y,width,height
          {
            [OBSTACLES.CACTUS_LARGE.animation]: [
              OBSTACLES.CACTUS_LARGE.spriteX,
              OBSTACLES.CACTUS_LARGE.spriteY,
              OBSTACLES.CACTUS_LARGE.width,
              OBSTACLES.CACTUS_LARGE.height
            ],
            [OBSTACLES.CACTUS_SMALL.animation]: [
              OBSTACLES.CACTUS_SMALL.spriteX,
              OBSTACLES.CACTUS_SMALL.spriteY,
              OBSTACLES.CACTUS_SMALL.width,
              OBSTACLES.CACTUS_SMALL.height
            ],
            [OBSTACLES.PTERODACTYL.animation]: [
              OBSTACLES.PTERODACTYL.spriteX,
              OBSTACLES.PTERODACTYL.spriteY,
              OBSTACLES.PTERODACTYL.width,
              OBSTACLES.PTERODACTYL.height
            ],
            [TREX.DEFAULT.animation]: [
              TREX.DEFAULT.spriteX,
              TREX.DEFAULT.spriteY,
              TREX.DEFAULT.width,
              TREX.DEFAULT.height
            ],
            ['TREX_WALKING']: [
              TREX.TREX_LEFT.spriteX,
              TREX.TREX_LEFT.spriteY,
              TREX.TREX_LEFT.width,
              TREX.TREX_LEFT.height,
              TREX.TREX_RIGHT.spriteX,
              TREX.TREX_RIGHT.spriteY,
              TREX.TREX_RIGHT.width,
              TREX.TREX_RIGHT.height
            ],
            [BACKGROUND.CLOUD.animation]: [
              BACKGROUND.CLOUD.spriteX,
              BACKGROUND.CLOUD.spriteY,
              BACKGROUND.CLOUD.width,
              BACKGROUND.CLOUD.height
            ],
            [BACKGROUND.HORIZON.animation]: [
              BACKGROUND.HORIZON.spriteX,
              BACKGROUND.HORIZON.spriteY,
              BACKGROUND.HORIZON.width,
              BACKGROUND.HORIZON.height
            ],
            [BACKGROUND.MOON.animation]: [
              BACKGROUND.MOON.spriteX,
              BACKGROUND.MOON.spriteY,
              BACKGROUND.MOON.width,
              BACKGROUND.MOON.height
            ],
            [BACKGROUND.STAR.animation]: [
              BACKGROUND.STAR.spriteX,
              BACKGROUND.STAR.spriteY,
              BACKGROUND.STAR.width,
              BACKGROUND.STAR.height
            ]
          }
        }
      />
    );
  }
}

export default Sprite;
