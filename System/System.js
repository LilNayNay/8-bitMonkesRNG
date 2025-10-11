/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class System extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./System/costumes/costume1.svg", { x: 0, y: 0 }),
    ];

    this.sounds = [
      new Sound("8-bit-powerup-6768", "./System/sounds/8-bit-powerup-6768.wav"),
      new Sound("8-bit-logo-291104", "./System/sounds/8-bit-logo-291104.mp3"),
      new Sound(
        "text-scroll-g4-180-openmpt-agogo-39617",
        "./System/sounds/text-scroll-g4-180-openmpt-agogo-39617.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "e" }, this.whenKeyEPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "null" }, this.whenIReceiveNull),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.showShop = 0;
    this.stage.watchers.monkeName.visible = false;
    this.stage.watchers.monkes.visible = false;
    this.stage.vars.monkes = [];
    this.stage.vars.monkeNumber = 0;
    this.stage.vars.rolling = 0;
    this.stage.vars.cooldown01 = 19;
    this.stage.vars.monkeName = 0;
    this.stage.vars.shopCanbeOpen = 0;
    this.stage.vars.shopClickAgain = 0;
    this.stage.vars.monee = 0;
    this.stage.vars.cooldwon = 2;
    this.stage.vars.cooldown2 = 19;
    this.stage.vars.require200 = 0;
    this.stage.vars.require500 = 0;
    this.stage.watchers.cooldown2.visible = false;
    this.stage.watchers.require200.visible = false;
    this.stage.watchers.require500.visible = false;
    this.stage.watchers.monkeNumber.visible = false;
    this.stage.watchers.rolling.visible = false;
    this.stage.watchers.showShop.visible = false;
    this.stage.vars.allMonkes = [];
    this.stage.vars.monke18192 = " Monke 1/8192";
    this.stage.vars.autoRol2 = 0;
    this.stage.vars.autoRol = "false";
    this.stage.vars.saveIdx = 0;
    this.stage.vars.saveCode = "";
    this.stage.vars.numListmonke = "";
    this.stage.watchers.saveCode.visible = false;
    this.stage.vars.index = 0;
    this.stage.watchers.cooldown01.visible = false;
    this.stage.vars.eee = 0;
    this.stage.vars.aaa = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      while (this.toNumber(this.stage.vars.rolling) === 1) {
        this.stage.vars.cooldown01--;
        yield* this.wait(0.1);
        yield;
      }
      if (this.toNumber(this.stage.vars.rolling) === 0) {
        this.stage.vars.cooldown01 = this.stage.vars.cooldown2;
      }
      yield;
    }
  }

  *whenKeySpacePressed() {
    while (true) {
      if (
        this.keyPressed("space") &&
        this.toNumber(this.stage.vars.rolling) === 1
      ) {
        yield* this.sayAndWait(
          "Wait...",
          this.toNumber(this.stage.vars.cooldown01) / 10
        );
      }
      yield;
    }
  }

  *whenKeyEPressed() {
    if (this.toNumber(this.stage.vars.eee) === 0) {
      this.stage.vars.eee = 1;
      this.stage.watchers.monkes.visible = true;
    } else {
      this.stage.watchers.monkes.visible = false;
      this.stage.vars.eee = 0;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.monee) === 100 ||
        this.compare(this.stage.vars.monee, 100) > 0
      ) {
        this.broadcast("coolDOWN");
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.compare(this.stage.vars.monee, 0) < 0) {
        this.broadcast("null");
      }
      yield;
    }
  }

  *whenIReceiveNull() {
    this.stage.vars.monee = 0;
  }
}
