import Phaser from 'phaser'

import { Menu } from './scenes/Menu'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './utils/contants'
import { GameScene } from './scenes/GameScene'

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Menu, GameScene],
}

const game = new Phaser.Game(config)
