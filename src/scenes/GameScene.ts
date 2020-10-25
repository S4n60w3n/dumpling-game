import Phaser from 'phaser'

import { IMAGES, SCENES, SOUNDS } from '../utils/contants'
import { Belt } from '../components/Belt'
import { Chopsticks } from '../components/Chopsticks'
import { Dumpling } from '../components/Dumpling'
import { Score } from '../components/Score'
import { load } from '../utils/loader'

const GAME_OVER_TIMEOUT = 1500

export class GameScene extends Phaser.Scene {
  belt!: Belt
  chopsticks!: Chopsticks
  dumpling!: Dumpling
  score!: Score
  gameOver!: number
  music!: Phaser.Sound.BaseSound

  constructor() {
    super(SCENES.game)
  }

  preload() {
    load(this.load)
  }

  create() {
    this.gameOver = 0
    this.music = this.sound.add(SOUNDS.restaurant)
    this.music.play()
    this.add.image(640, 360, IMAGES.table)
    this.belt = new Belt(this, true)
    this.dumpling = new Dumpling(this)
    this.chopsticks = new Chopsticks(this)
    this.score = new Score(this)

    this.input.keyboard.on('keydown-ESC', this.onEnd, this)
    this.input.keyboard.on('keydown', this.onKeyDown, this)
    this.input.on('pointerdown', this.onKeyDown, this)
  }

  onEnd = () => {
    this.music.stop()
    this.scene.start(SCENES.menu)
  }

  onGameOver = () => {
    this.gameOver = Date.now()
    this.score.onEnd()
  }

  onKeyDown() {
    if (this.gameOver) {
      if (Date.now() - this.gameOver > GAME_OVER_TIMEOUT) {
        this.onEnd()
      }
      return
    }
    this.dumpling.switchDirection()
  }

  update(time: number, delta: number) {
    if (this.gameOver) {
      return
    }
    this.score.update(delta)
    this.chopsticks.update(delta)
    this.dumpling.update(delta)
    this.physics.overlap(
      this.dumpling.image,
      this.chopsticks.images,
      this.onGameOver,
    )
    this.dumpling.onOutOfPlate(this.onGameOver)
  }
}
