import Phaser from 'phaser'

import table from '../assets/table.svg'
import beltPart from '../assets/beltPart.svg'
import plate from '../assets/plate.svg'
import dumpling3 from '../assets/dumpling3.svg'
import dumpling4 from '../assets/dumpling4.svg'
import dumpling5 from '../assets/dumpling5.svg'
import chopsticksOpen from '../assets/chopsticksOpen.svg'

import {IMAGES, SCENES} from '../utils/contants'
import { Belt } from '../components/Belt'
import {Chopsticks} from "../components/Chopsticks";
import {Dumpling} from "../components/Dumpling";

export class GameScene extends Phaser.Scene {
  belt!: Belt
  chopsticks!: Chopsticks
  dumpling!: Dumpling
  constructor() {
    super(SCENES.game)
  }

  preload() {
    this.load.image(IMAGES.table, table)
    this.load.image(IMAGES.beltPart, beltPart)
    this.load.image(IMAGES.dumpling3, dumpling3)
    this.load.image(IMAGES.dumpling4, dumpling4)
    this.load.image(IMAGES.dumpling5, dumpling5)
    this.load.image(IMAGES.plate, plate)
    this.load.image(IMAGES.chopstickOpen, chopsticksOpen)
  }

  create() {
    this.add.image(640, 360, 'table')
    this.belt = new Belt(this, true)
    this.chopsticks = new Chopsticks(this)
    this.dumpling = new Dumpling(this)


    this.input.keyboard.on('keydown-ESC', this.onEnd, this);
    this.input.keyboard.on('keydown-SPACE', this.onKeyDown, this);
    this.input.on('pointerdown', this.onKeyDown, this);
  }

  onEnd = () => {
    this.scene.restart()
    this.scene.switch(SCENES.menu)
  }

  onKeyDown() {
    this.dumpling.switchDirection()
  }

  update(time: number, delta: number) {
    this.chopsticks.update(delta)
    this.physics.overlap(this.dumpling.image, this.chopsticks.images, this.onEnd)
    this.dumpling.onOutOfPlate(this.onEnd)
  }
}
