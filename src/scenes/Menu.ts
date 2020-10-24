import Phaser from 'phaser'

import table from '../assets/table.svg'
import beltPart from '../assets/beltPart.svg'
import dumpling from '../assets/dumpling.svg'
import dumpling2 from '../assets/dumpling2.svg'
import dumpling3 from '../assets/dumpling3.svg'

import {IMAGES, SCENES} from '../utils/contants'
import { Belt } from '../components/Belt'
import {MenuDumpling} from "../components/MenuDumpling";

export class Menu extends Phaser.Scene {
  belt!: Belt
  constructor() {
    super(SCENES.menu)
  }

  preload() {
    this.load.image(IMAGES.table, table)
    this.load.image(IMAGES.beltPart, beltPart)
    this.load.image(IMAGES.dumpling, dumpling)
    this.load.image(IMAGES.dumpling2, dumpling2)
    this.load.image(IMAGES.dumpling3, dumpling3)
  }

  create() {
    this.add.image(640, 360, 'table')
    this.belt = new Belt(this)
    new MenuDumpling(this)
  }

  update(time: number, delta: number) {
    this.belt.update(delta, 1)
  }
}
