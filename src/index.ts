import Phaser from "phaser";
import { Menu } from "./scenes/menu";
import {SCREEN_WIDTH} from "./utils/contants";

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: SCREEN_WIDTH,
  height: 720,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT ,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: Menu
};

const game = new Phaser.Game(config);
