/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CooldownReduce extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Image2", "./CooldownReduce/costumes/Image2.png", {
        x: 357,
        y: 357,
      }),
      new Costume("costume1", "./CooldownReduce/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Image", "./CooldownReduce/costumes/Image.png", {
        x: 357,
        y: 357,
      }),
      new Costume("costume2", "./CooldownReduce/costumes/costume2.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Button3-a", "./CooldownReduce/costumes/Button3-a.svg", {
        x: 45.50049999999996,
        y: 27.336000000000013,
      }),
      new Costume("Button3-a2", "./CooldownReduce/costumes/Button3-a2.svg", {
        x: 45.50050000000002,
        y: 27.336000000000013,
      }),
      new Costume("Button3-a3", "./CooldownReduce/costumes/Button3-a3.svg", {
        x: 45.50050000000007,
        y: 27.336000000000013,
      }),
      new Costume("costume3", "./CooldownReduce/costumes/costume3.svg", {
        x: 45.500500000000045,
        y: 27.336000000000013,
      }),
    ];

    this.sounds = [new Sound("pop", "./CooldownReduce/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "coolDOWN" },
        this.whenIReceiveCooldown
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Show the shop from save " },
        this.whenIReceiveShowTheShopFromSave
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "Button3-a";
    this.visible = false;
    this.x = -190;
    this.y = 0;
  }

  *whenthisspriteclicked() {
    if (
      (this.toNumber(this.stage.vars.monee) === 100 ||
        this.compare(this.stage.vars.monee, 100) > 0) &&
      this.toNumber(this.stage.vars.require200) === 0 &&
      this.toNumber(this.stage.vars.require500) === 0
    ) {
      this.stage.vars.cooldown2 -= 4;
      this.stage.vars.cooldown01 -= 4;
      this.stage.vars.cooldwon -= 0.5;
      this.stage.vars.monee -= 100;
      this.stage.vars.require500 = 0;
      this.costume = "Button3-a2";
      yield* this.wait(0.01);
      this.stage.vars.require200 = 1;
      return;
    }
  }

  *whenIReceiveCooldown() {
    this.visible = true;
  }

  *whenthisspriteclicked2() {
    if (this.toNumber(this.stage.vars.require200) === 1) {
      if (
        this.toNumber(this.stage.vars.monee) === 200 ||
        this.compare(this.stage.vars.monee, 200) > 0
      ) {
        this.stage.vars.cooldown2 -= 4;
        this.stage.vars.cooldown01 -= 4;
        this.stage.vars.cooldwon -= 0.5;
        this.stage.vars.monee -= 200;
        this.stage.vars.require200 = 0;
        this.costume = "Button3-a2";
        yield* this.wait(0.01);
        this.stage.vars.require500 = 1;
        return;
      }
    } else {
      return;
    }
  }

  *whenthisspriteclicked3() {
    if (this.toNumber(this.stage.vars.require500) === 1) {
      if (
        this.toNumber(this.stage.vars.monee) === 500 ||
        this.compare(this.stage.vars.monee, 500) > 0
      ) {
        this.stage.vars.cooldown2 -= 4;
        this.stage.vars.cooldown01 -= 4;
        this.stage.vars.cooldwon -= 0.5;
        this.stage.vars.monee -= 500;
        this.stage.vars.require500 = 1;
        this.stage.vars.require200 = 0;
        this.costume = "costume3";
        return;
      }
    } else {
      return;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.compare(this.stage.vars.cooldwon, 0.1) < 0) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.toNumber(this.stage.vars.require500) === 1) {
        this.costume = "costume3";
        return;
      }
      yield;
    }
  }

  *whenIReceiveShowTheShopFromSave() {
    this.visible = true;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.cooldown01) === 0 ||
        this.compare(this.stage.vars.cooldown01, 0) < 0
      ) {
        this.stage.vars.cooldown2 = 0;
      }
      return;
      yield;
    }
  }
}
