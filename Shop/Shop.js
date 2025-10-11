/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Shop/costumes/costume1.svg", { x: 0, y: 0 }),
      new Costume("Image", "./Shop/costumes/Image.png", { x: 357, y: 357 }),
      new Costume("Image2", "./Shop/costumes/Image2.png", { x: 357, y: 357 }),
    ];

    this.sounds = [new Sound("pop", "./Shop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.x = -211;
    this.y = 55;
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.shopCanbeOpen) === 1) {
      this.broadcast("show shop");
    }
  }
}
