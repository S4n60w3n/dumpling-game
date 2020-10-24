import Phaser from 'phaser'

import { IMAGES, SCREEN_HEIGHT } from '../utils/contants'

const WIDTH = 500
const AMOUNT = 8
const OFFSET = 1000
const SPEED_INC = 0.00001

export class Chopsticks {
  scene: Phaser.Scene
  speed: number = 0.3
  recycleIndex = 0
  recycleTime = 0
  container: Phaser.GameObjects.Container

  constructor(scene: Phaser.Scene, plate: boolean = false) {
    this.scene = scene
    this.container = this.scene.add.container(0, 0)
    for (let i = 0; i < AMOUNT; i += 1) {
      const sprite = this.scene.add.image(
        WIDTH * i + OFFSET,
        this.getPosition(),
        IMAGES.chopstickOpen,
      )
      this.checkRotation(sprite)
      this.container.add(sprite)
    }
  }

  getPosition() {
    return Math.random() >= 0.5 ? 100 : 700
  }

  checkRotation(image: Phaser.GameObjects.Image) {
    if (image.y < SCREEN_HEIGHT / 2) {
      if (image.scaleY !== -1) {
        image.setScale(1, -1)
      }
    } else {
      if (image.scaleY !== 1) {
        image.setScale(1, 1)
      }
    }
  }

  update(delta: number) {
    this.container.x -= delta * this.speed
    this.speed += delta * SPEED_INC
    this.checkRecycle()
  }

  checkRecycle() {
    const image = this.container.getAt(
      this.recycleIndex,
    ) as Phaser.GameObjects.Image
    const x = image.x + this.container.x
    if (x < -100) {
      let lastIndex = (this.recycleIndex + AMOUNT - 1) % AMOUNT
      const lastImage = this.container.getAt(
        lastIndex,
      ) as Phaser.GameObjects.Image
      image.x = lastImage.x + WIDTH
      image.y = this.getPosition()
      this.checkRotation(image)
      this.recycleIndex += 1
      this.recycleIndex %= AMOUNT
    }
  }
}
