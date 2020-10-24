import Phaser from 'phaser'
import {IMAGES, SCENES, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/contants'

export class MenuDumpling {
  scene: Phaser.Scene
  image: Phaser.GameObjects.Image

  constructor(scene: Phaser.Scene) {
    this.scene = scene
    this.image = this.scene.add.image(
      SCREEN_WIDTH / 2,
      SCREEN_HEIGHT / 2,
      IMAGES.dumpling,
    )
    this.image.setRotation(Math.PI / 2)
    this.image.setInteractive()
    this.image.on('pointerover', () => {
      this.image.setTexture(IMAGES.dumpling2)
    })
    this.image.on('pointerout', () => {
      this.image.setTexture(IMAGES.dumpling)
    })
    this.image.on('pointerdown', () => {
      this.image.setTexture(IMAGES.dumpling3)
      this.scene.scene.switch(SCENES.game)
    })
  }
}
