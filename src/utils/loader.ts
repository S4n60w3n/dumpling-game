import * as Phaser from 'phaser'

import { IMAGES, SOUNDS } from './contants'

export const load = (loader: Phaser.Loader.LoaderPlugin) => {
  loader.image(IMAGES.table, '/assets/table.svg')
  loader.image(IMAGES.beltPart, '/assets/beltPart.svg')
  loader.image(IMAGES.dumpling, '/assets/dumpling.svg')
  loader.image(IMAGES.dumpling2, '/assets/dumpling2.svg')
  loader.image(IMAGES.dumpling3, '/assets/dumpling3.svg')
  loader.image(IMAGES.dumpling4, '/assets/dumpling4.svg')
  loader.image(IMAGES.dumpling5, '/assets/dumpling5.svg')
  loader.image(IMAGES.plate, '/assets/plate.svg')
  loader.image(IMAGES.chopstick, '/assets/chopsticksOpen.svg')
  loader.audio(SOUNDS.restaurant, ['./assets/restaurant.mp3'])
}
