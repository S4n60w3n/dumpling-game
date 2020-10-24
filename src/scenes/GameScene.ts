import Phaser from 'phaser'

import table from '../assets/table.svg'
import beltPart from '../assets/beltPart.svg'
import plate from '../assets/plate.svg'
import dumpling from '../assets/dumpling.svg'
import dumpling2 from '../assets/dumpling2.svg'
import dumpling3 from '../assets/dumpling3.svg'
import chopsticksOpen from '../assets/chopsticksOpen.svg'

import {IMAGES, SCENES} from '../utils/contants'
import { Belt } from '../components/Belt'
import {MenuDumpling} from "../components/MenuDumpling";
import {Chopsticks} from "../components/Chopsticks";

export class GameScene extends Phaser.Scene {
  belt!: Belt
  chopsticks!: Chopsticks
  constructor() {
    super(SCENES.game)
  }

  preload() {
    this.load.image(IMAGES.table, table)
    this.load.image(IMAGES.beltPart, beltPart)
    this.load.image(IMAGES.dumpling, dumpling)
    this.load.image(IMAGES.dumpling2, dumpling2)
    this.load.image(IMAGES.dumpling3, dumpling3)
    this.load.image(IMAGES.plate, plate)
    this.load.image(IMAGES.chopstickOpen, chopsticksOpen)
  }

  create() {
    this.add.image(640, 360, 'table')
    this.belt = new Belt(this, true)
    this.chopsticks = new Chopsticks(this)
  }

  update(time: number, delta: number) {
    this.chopsticks.update(delta)
  }
}
