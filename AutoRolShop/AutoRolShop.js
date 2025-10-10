/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AutoRolShop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./AutoRolShop/costumes/costume3.svg", {
        x: 45.5005000000001,
        y: 27.336000000000013,
      }),
    ];

    this.sounds = [new Sound("pop", "./AutoRolShop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PRESS SPACE" },
        this.whenIReceivePressSpace
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Save_end" },
        this.whenIReceiveSaveEnd
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.x = 193;
    this.y = 0;
    this.costume = "Button3-a";
  }

  *whenthisspriteclicked() {
    if (
      this.toNumber(this.stage.vars.monee) === 1000 ||
      this.compare(this.stage.vars.monee, 1000) > 0
    ) {
      this.stage.vars.monee -= 1000;
      this.stage.vars.autoRol2 = 1;
      yield* this.thinkAndWait("press G to use auto roll!", 1);
      this.visible = false;
    } else {
      yield* this.thinkAndWait("you cannot buy this!", 1);
    }
  }

  *whenIReceivePressSpace() {
    yield* this.wait(0.5);
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

  *whenIReceiveSaveEnd() {
    while (true) {
      if (this.toNumber(this.stage.vars.autoRol2) === 1) {
        this.visible = false;
        return;
      } else {
        this.visible = true;
        return;
      }
      yield;
    }
  }
}
