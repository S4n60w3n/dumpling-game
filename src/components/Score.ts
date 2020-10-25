import Phaser from 'phaser'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/contants'

const SCORE_MULTI = 0.001
const SCORE_KEY = 'dumpling_highScore'
const FONT_STYLE = {
  fontStyle: 30,
  textAlign: 'center',
}

export class Score {
  scene: Phaser.Scene
  rawScore: number = 0
  highScore: number = 0
  scoreText: Phaser.GameObjects.Text

  constructor(scene: Phaser.Scene) {
    this.scene = scene
    this.highScore = this.getHighScore()
    this.scoreText = this.scene.add.text(SCREEN_WIDTH / 2, 50, `0`, FONT_STYLE)
  }

  getHighScore() {
    try {
      return Number(localStorage.getItem(SCORE_KEY))
    } catch (e) {
      console.error(e)
      return 0
    }
  }

  setHighScore(amount: number) {
    localStorage.setItem(SCORE_KEY, `${amount}`)
  }

  onEnd() {
    this.setHighScore(this.highScore)
    this.scene.tweens.add({
      targets: this.scoreText,
      duration: 2000,
      y: SCREEN_HEIGHT / 2,
      scale: 3,
      ease: 'Quad.easeInOut',
      repeat: 0,
    })
  }

  update(delta: number) {
    this.rawScore += delta * SCORE_MULTI
    const score = Math.floor(this.rawScore)
    if (score > this.highScore) {
      this.highScore = score
    }
    this.scoreText.setText(`${score} (${this.highScore})`)
  }
}
