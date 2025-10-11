/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class IntroText extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./IntroText/costumes/costume1.svg", {
        x: 115.91630052546047,
        y: 32.14526282231853,
      }),
    ];

    this.sounds = [
      new Sound(
        "8-bit-powerup-6768",
        "./IntroText/sounds/8-bit-powerup-6768.mp3"
      ),
      new Sound(
        "8-bit-logo-291104",
        "./IntroText/sounds/8-bit-logo-291104.mp3"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 0;
    this.visible = true;
    this.size = 75;
    this.x = 7;
    this.y = 182;
    yield* this.wait(0.5);
    yield* this.startSound("8-bit-logo-291104");
    yield* this.glide(1, 9, 97);
    yield* this.wait(1);
    while (!(this.size === 100)) {
      this.size += 5;
      yield;
    }
    this.broadcast("hands");
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
    this.broadcast("PRESS SPACE");
  }
}
