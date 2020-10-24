import Phaser from 'phaser'

import table from '../assets/table.svg'
import beltPart from '../assets/beltPart.svg'
import { IMAGES } from '../utils/contants'
import { Belt } from '../components/belt'

export class Menu extends Phaser.Scene {
  belt!: Belt
  constructor() {
    super('menu')
  }

  preload() {
    this.load.image(IMAGES.table, table)
    this.load.image(IMAGES.beltPart, beltPart)
  }

  create() {
    this.add.image(640, 360, 'table')
    this.belt = new Belt(this)
  }

  update(time: number, delta: number) {
    this.belt.update(delta, 1)
  }
}
