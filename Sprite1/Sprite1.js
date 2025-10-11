/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 124.25,
        y: 19.73124999999999,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PRESS SPACE" },
        this.whenIReceivePressSpace
      ),
      new Trigger(Trigger.BROADCAST, { name: "x" }, this.whenIReceiveX),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.x = 5;
    this.y = -104;
  }

  *whenIReceivePressSpace() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    this.broadcast("x");
    this.stage.vars.shopCanbeOpen = 1;
    return;
  }

  *whenIReceiveX() {
    while (true) {
      if (this.keyPressed("space")) {
        for (let i = 0; i < 10; i++) {
          this.effects.pixelate += 10;
          this.effects.ghost += 10;
          yield;
        }
        this.visible = false;
        return;
      }
      yield;
    }
  }
}
