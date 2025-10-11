/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 218.13069776149803,
        y: 57.95215324300696,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Saving…" },
        this.whenIReceiveSaving
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.x = 11;
    this.y = 4;
    this.moveAhead();
  }

  *whenIReceiveSaving() {
    while (this.toNumber(this.stage.vars.svaing) === 1) {
      this.visible = true;
      while (this.toNumber(this.stage.vars.svaing) === 1) {
        this.effects.color += 5;
        yield;
      }
      yield;
    }
    this.visible = false;
  }
}
