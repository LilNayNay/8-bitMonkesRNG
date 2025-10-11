/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Instructions extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Instructions/costumes/button3-a.svg", {
        x: 55.68800000000002,
        y: 11.148500000000041,
      }),
      new Costume("button3-b", "./Instructions/costumes/button3-b.svg", {
        x: 72,
        y: 72,
      }),
    ];

    this.sounds = [new Sound("pop", "./Instructions/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.x = -2;
    this.y = -164;
    this.stage.watchers.instructions.visible = false;
    this.stage.vars.instructionsClicked = 0;
    while (true) {
      this.stage.vars.instructions =
        'DO NOT INTERRUPT GAME BY PRESSING ANY KEYS WHEN INSERTING SAVE. E to see/hide list of monkes obtained Space to roll for monke X to switch to any Monke costume obtained (beta)* (Type the full monke name in the prompt after pressing X) G to auto roll/cancel auto roll S to insert a save code (beta) If you press S and you want to exit, type "Exit"';
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.instructionsClicked) === 0) {
      this.stage.watchers.instructions.visible = true;
      this.stage.vars.instructionsClicked = 1;
    } else {
      this.stage.watchers.instructions.visible = false;
      this.stage.vars.instructionsClicked = 0;
    }
  }
}
