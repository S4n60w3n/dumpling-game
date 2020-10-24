import Phaser from 'phaser'

import { IMAGES, SCREEN_WIDTH } from '../utils/contants'

const WIDTH = 368
const AMOUNT = 8
const SPEED = 0.3
const RECYCLE_TIME = 1000

export class Belt {
  scene: Phaser.Scene
  recycleIndex = AMOUNT - 1
  recycleTime = 0
  container: Phaser.GameObjects.Container

  constructor(scene: Phaser.Scene) {
    this.scene = scene
    this.container = this.scene.add.container(-500, 0)
    for (let i = 0; i < AMOUNT; i += 1) {
      const sprite = this.scene.add.image(WIDTH * i, 360, IMAGES.beltPart)
      sprite.setOrigin(0, 0.5)
      this.container.add(sprite)
    }
  }

  update(delta: number, speed: number) {
    this.container.x += delta * speed * SPEED
    this.recycleTime += delta
    if (this.recycleTime > RECYCLE_TIME) {
      this.checkRecycle()
      this.recycleTime = 0
    }
  }

  checkRecycle() {
    const image = this.container.getAt(
      this.recycleIndex,
    ) as Phaser.GameObjects.Image
    const x = image.x + this.container.x
    if (x > SCREEN_WIDTH) {
      const firstImage = this.container.getAt(
        (this.recycleIndex + 1) % AMOUNT,
      ) as Phaser.GameObjects.Image
      image.x = firstImage.x - WIDTH
      this.recycleIndex -= 1
      if (this.recycleIndex < 0) {
        this.recycleIndex = AMOUNT - 1
      }
    }
  }
}
