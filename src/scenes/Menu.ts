import Phaser from 'phaser'

import { IMAGES, SCENES, SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/contants'
import { Belt } from '../components/Belt'
import { MenuDumpling } from '../components/MenuDumpling'
import { load } from '../utils/loader'

export class Menu extends Phaser.Scene {
  belt!: Belt
  constructor() {
    super(SCENES.menu)
  }

  preload() {
    load(this.load)
  }

  create() {
    this.add.image(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, IMAGES.table)
    this.belt = new Belt(this)
    new MenuDumpling(this)
    this.add.text(50, SCREEN_HEIGHT - 100, 'Click on dumpling to start')
    this.add.text(SCREEN_WIDTH - 350, 100, 'Press any key to switch direction')
  }

  update(time: number, delta: number) {
    this.belt.update(delta)
  }
}
