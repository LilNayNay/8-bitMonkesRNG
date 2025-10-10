/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Getsave extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Button2-a", "./Getsave/costumes/Button2-a.svg", {
        x: 58.982,
        y: 29.212999999999994,
      }),
    ];

    this.sounds = [new Sound("pop", "./Getsave/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.savecodeList.visible = false;
    this.x = -180;
    this.y = 65;
    this.visible = true;
    this.stage.vars.savecodeList = [];
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.spriteClicked) === 0) {
      this.stage.vars.saveCode = "";
      yield* this.broadcastAndWait("Save code plz");
      this.stage.vars.savecodeList.splice(0, 0, this.stage.vars.saveCode);
      this.stage.watchers.savecodeList.visible = true;
      this.stage.vars.spriteClicked = 1;
    } else {
      this.stage.watchers.savecodeList.visible = false;
      this.stage.vars.spriteClicked = 0;
      this.stage.vars.savecodeList = [];
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.spriteClicked = 0;
  }
}
