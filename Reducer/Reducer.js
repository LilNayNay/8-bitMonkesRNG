/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Reducer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Reducer/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Button3-b", "./Reducer/costumes/Button3-b.svg", {
        x: 44.83100000000002,
        y: 31.215538946717402,
      }),
    ];

    this.sounds = [new Sound("pop", "./Reducer/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Save_end" },
        this.whenIReceiveSaveEnd
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Save_end" },
        this.whenIReceiveSaveEnd2
      ),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.compare(this.stage.vars.monee, 1500) > 0 ||
        this.toNumber(this.stage.vars.monee) === 1500
      ) {
        this.effects.ghost = 100;
        this.visible = true;
        for (let i = 0; i < 10; i++) {
          this.effects.ghost -= 10;
          yield;
        }
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.x = 193;
    this.y = 69;
  }

  *whenIReceiveSaveEnd() {
    while (true) {
      if (
        this.compare(this.stage.vars.monee, 1500) > 0 ||
        this.toNumber(this.stage.vars.monee) === 1500
      ) {
        this.effects.ghost = 100;
        this.visible = true;
        for (let i = 0; i < 10; i++) {
          this.effects.ghost -= 10;
          yield;
        }
        return;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.compare(this.stage.vars.monee, 1500) > 0 ||
      this.toNumber(this.stage.vars.monee) === 1500
    ) {
      yield* this.askAndWait(
        "Would you like to increase common monke rarity? (Yes/No)"
      );
      if (this.answer === "Yes") {
        this.stage.vars.monee -= 1500;
        this.stage.vars.commonMonkeRarity += 2;
        for (let i = 0; i < 10; i++) {
          this.effects.ghost -= 10;
          yield;
        }
        this.stage.vars.ecommonrdeuec = 1;
        this.visible = false;
      }
      if (this.answer === "No") {
        return;
      }
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.ecommonrdeuec = 0;
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.toNumber(this.stage.vars.ecommonrdeuec) === 1) {
        this.visible = false;
        return;
      }
      yield;
    }
  }

  *whenIReceiveSaveEnd2() {
    while (true) {
      if (this.toNumber(this.stage.vars.ecommonrdeuec) === 1) {
        this.visible = false;
        return;
      }
      yield;
    }
  }
}
