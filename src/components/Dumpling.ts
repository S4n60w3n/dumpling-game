import Phaser from 'phaser'

import { IMAGES, SCENES, SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/contants'

const SPEED = 300
const RADIUS = 50
const PLATE_BOUNDARIES = 100

export class Dumpling {
  scene: Phaser.Scene
  image: Phaser.GameObjects.Image
  direction: number = 0

  constructor(scene: Phaser.Scene) {
    this.scene = scene
    this.image = this.scene.physics.add.image(
      300,
      SCREEN_HEIGHT / 2,
      IMAGES.dumpling3,
    )
    ;(this.image.body as Phaser.Physics.Arcade.Body).setCircle(
      RADIUS,
      this.image.width / 4,
      this.image.height / 4,
    )
    this.image.setInteractive()
    this.image.on('pointerdown', () => {
      if (this.direction <= -1) {
        this.image.setTexture(IMAGES.dumpling4)
        this.direction = 1
      } else {
        this.image.setTexture(IMAGES.dumpling5)
        this.direction = -1
      }
    })
  }

  stop() {
    ;(this.image.body as Phaser.Physics.Arcade.Body).setVelocityY(0)
  }

  onOutOfPlate = (fn: () => void) => {
    if (
      this.image.y <= PLATE_BOUNDARIES ||
      this.image.y >= SCREEN_HEIGHT - PLATE_BOUNDARIES
    ) {
      fn()
    }
  }

  switchDirection() {
    if (this.direction <= -1) {
      this.image.setTexture(IMAGES.dumpling4)
      this.direction = 1
      ;(this.image.body as Phaser.Physics.Arcade.Body).setVelocityY(SPEED)
    } else {
      this.image.setTexture(IMAGES.dumpling5)
      this.direction = -1
      ;(this.image.body as Phaser.Physics.Arcade.Body).setVelocityY(-SPEED)
    }
  }
}
