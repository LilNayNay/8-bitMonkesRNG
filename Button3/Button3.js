/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Button3/costumes/button3-a.svg", {
        x: 127.8762805740395,
        y: 110.19788518318964,
      }),
      new Costume("button3-b", "./Button3/costumes/button3-b.svg", {
        x: 110.33605663964508,
        y: 54.729338544004705,
      }),
    ];

    this.sounds = [new Sound("pop", "./Button3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show shop" },
        this.whenIReceiveShowShop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide shop" },
        this.whenIReceiveHideShop
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.x = 0;
    this.y = 0;
  }

  *whenIReceiveShowShop() {
    this.visible = true;
  }

  *whenIReceiveHideShop() {
    this.visible = false;
  }
}
