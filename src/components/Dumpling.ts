import Phaser from 'phaser'

import { IMAGES, PLATE_CENTER, SCREEN_HEIGHT } from '../utils/contants'

const SPEED = 0.4
const X_OFFSET = 20
const RADIUS = 60
const PLATE_BOUNDARIES = 100

export class Dumpling {
  scene: Phaser.Scene
  image: Phaser.GameObjects.Image
  direction: number = 0

  constructor(scene: Phaser.Scene) {
    this.scene = scene
    this.image = this.scene.physics.add.image(
      PLATE_CENTER,
      SCREEN_HEIGHT / 2,
      IMAGES.dumpling3,
    )
    ;(this.image.body as Phaser.Physics.Arcade.Body).setCircle(
      RADIUS,
      this.image.width / 2 - RADIUS + X_OFFSET,
      this.image.height / 2 - RADIUS,
    )
  }

  onOutOfPlate = (fn: () => void) => {
    if (
      this.image.y <= PLATE_BOUNDARIES ||
      this.image.y >= SCREEN_HEIGHT - PLATE_BOUNDARIES
    ) {
      fn()
    }
  }

  update(delta: number) {
    this.image.y += this.direction * SPEED * delta
  }

  switchDirection() {
    if (this.direction <= -1) {
      this.image.setTexture(IMAGES.dumpling4)
      this.direction = 1
    } else {
      this.image.setTexture(IMAGES.dumpling5)
      this.direction = -1
    }
  }
}
