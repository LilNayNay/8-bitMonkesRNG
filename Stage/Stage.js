/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("Forest", "./Stage/costumes/Forest.png", { x: 480, y: 360 }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenstageclicked)];

    this.vars.rolling = 0;
    this.vars.cooldown01 = 19;
    this.vars.monkeName = 0;
    this.vars.monkeNumber = 0;
    this.vars.monee = 0;
    this.vars.showShop = 0;
    this.vars.shopCanbeOpen = 1;
    this.vars.shopClickAgain = 0;
    this.vars.cooldwon = 2;
    this.vars.cooldown2 = 19;
    this.vars.require200 = 0;
    this.vars.require500 = 0;
    this.vars.uselessVar = "Secret Monke";
    this.vars.monke18192 = " Monke 1/8192";
    this.vars.autoRol = "false";
    this.vars.autoRol2 = 0;
    this.vars.saveCode = "0|19|19|2|0|0|0|0|0|0||2|0|";
    this.vars.saveIdx = 0;
    this.vars.monkeVar = 0;
    this.vars.numListmonke = 0;
    this.vars.index = 0;
    this.vars.savecodeRead = 0;
    this.vars.spriteClicked = 1;
    this.vars.svaing = 0;
    this.vars.cInvis = 0;
    this.vars.eee = 0;
    this.vars.aaa = 0;
    this.vars.commonMonkeRarity = 2;
    this.vars.ecommonrdeuec = 0;
    this.vars.instructions =
      'DO NOT INTERRUPT GAME BY PRESSING ANY KEYS WHEN INSERTING SAVE. E to see/hide list of monkes obtained Space to roll for monke X to switch to any Monke costume obtained (beta)* (Type the full monke name in the prompt after pressing X) G to auto roll/cancel auto roll S to insert a save code (beta) If you press S and you want to exit, type "Exit"';
    this.vars.instructionsClicked = 0;
    this.vars.idxSaveAfterSave = 1;
    this.vars.monkes = [];
    this.vars.allMonkes = [
      "common monke 1/2",
      "uncommon monke 1/4",
      "rare monke 1/8",
      "ligma mutated: common monke 1/16",
      "water mutated: rare monke 1/32",
      "Savage monke 1/64",
      "SUPER RARE monke 1/128",
      "EXOTIC monke 1/256",
      "ligma mutated: EXOTIC monke 1/512",
      "SCRATCH Monke 1/1024",
      "SMOL Water mutated: SCRATCH Monke 1/2048",
      "[Fan EXOTIC] FISHER Monke 1/4096",
      "Secret Monke",
      "player9492 Monke 1/8192",
      "URANIUM Mutated: Scratch Monke 1/10000",
      "Urine Mutated: Scratch Monke 1/20000",
    ];
    this.vars.lsitMonke = [];
    this.vars.savecodeList = ["0|19|19|2|0|0|0|0|0|0||2|0|"];
    this.vars.monkeNumbersEffect = [
      6, 7, 8, 6, 7, 8, 9, 10, 11, 12, 13, 6, 7, 8, 9, 10, 11, 12, 13,
    ];

    this.watchers.rolling = new Watcher({
      label: "rolling",
      style: "normal",
      visible: false,
      value: () => this.vars.rolling,
      x: 611,
      y: -148,
    });
    this.watchers.cooldown01 = new Watcher({
      label: "cooldown(0.1)",
      style: "normal",
      visible: false,
      value: () => this.vars.cooldown01,
      x: 240,
      y: -131,
    });
    this.watchers.monkeName = new Watcher({
      label: "monke_name",
      style: "large",
      visible: false,
      value: () => this.vars.monkeName,
      x: 240,
      y: 180,
    });
    this.watchers.monkeNumber = new Watcher({
      label: "monke-number",
      style: "normal",
      visible: false,
      value: () => this.vars.monkeNumber,
      x: 245,
      y: 149,
    });
    this.watchers.monee = new Watcher({
      label: "monee",
      style: "normal",
      visible: true,
      value: () => this.vars.monee,
      x: 613,
      y: -156,
    });
    this.watchers.showShop = new Watcher({
      label: "show shop",
      style: "normal",
      visible: false,
      value: () => this.vars.showShop,
      x: 245,
      y: -21,
    });
    this.watchers.cooldwon = new Watcher({
      label: "cooldwon",
      style: "normal",
      visible: true,
      value: () => this.vars.cooldwon,
      x: 240,
      y: -156,
    });
    this.watchers.cooldown2 = new Watcher({
      label: "cooldown(0.1)_?",
      style: "normal",
      visible: false,
      value: () => this.vars.cooldown2,
      x: 245,
      y: 123,
    });
    this.watchers.require200 = new Watcher({
      label: "require 200",
      style: "normal",
      visible: false,
      value: () => this.vars.require200,
      x: 245,
      y: 95,
    });
    this.watchers.require500 = new Watcher({
      label: "Require_500",
      style: "normal",
      visible: false,
      value: () => this.vars.require500,
      x: 245,
      y: 66,
    });
    this.watchers.autoRol = new Watcher({
      label: "auto_rol",
      style: "normal",
      visible: true,
      value: () => this.vars.autoRol,
      x: 245,
      y: 151,
    });
    this.watchers.saveCode = new Watcher({
      label: "Save code",
      style: "normal",
      visible: false,
      value: () => this.vars.saveCode,
      x: 245,
      y: -90,
    });
    this.watchers.monkeVar = new Watcher({
      label: "Monke_var",
      style: "normal",
      visible: false,
      value: () => this.vars.monkeVar,
      x: 240,
      y: 39,
    });
    this.watchers.instructions = new Watcher({
      label: "instructions",
      style: "large",
      visible: false,
      value: () => this.vars.instructions,
      x: 279,
      y: 82,
    });
    this.watchers.monkes = new Watcher({
      label: "monkes",
      style: "normal",
      visible: false,
      value: () => this.vars.monkes,
      x: 469,
      y: 180,
      width: 249,
      height: 69,
    });
    this.watchers.savecodeList = new Watcher({
      label: "Savecode_list",
      style: "normal",
      visible: true,
      value: () => this.vars.savecodeList,
      x: 240,
      y: 30,
      width: 480,
      height: 194,
    });
    this.watchers.monkeNumbersEffect = new Watcher({
      label: "monke_numbers(effect)",
      style: "normal",
      visible: false,
      value: () => this.vars.monkeNumbersEffect,
      x: 245,
      y: 123,
      width: undefined,
      height: undefined,
    });
  }

  *whenstageclicked() {
    this.broadcast("hide shop");
  }
}
