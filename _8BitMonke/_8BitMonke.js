import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8BitMonke extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("*-bit monkey", "./_8BitMonke/costumes/*-bit monkey.png", {
        x: 271,
        y: 283,
      }),
      new Costume("*-bit monkey2", "./_8BitMonke/costumes/*-bit monkey2.png", {
        x: 271,
        y: 283,
      }),
      new Costume(
        "*-bit monkey(secret)",
        "./_8BitMonke/costumes/*-bit monkey(secret).png",
        { x: 271, y: 283 }
      ),
      new Costume("uncommon", "./_8BitMonke/costumes/uncommon.png", {
        x: 254,
        y: 300,
      }),
      new Costume("rare", "./_8BitMonke/costumes/rare.png", { x: 267, y: 308 }),
      new Costume("ligma common", "./_8BitMonke/costumes/ligma common.png", {
        x: 255,
        y: 299,
      }),
      new Costume("water rare", "./_8BitMonke/costumes/water rare.png", {
        x: 302,
        y: 338,
      }),
      new Costume("savage", "./_8BitMonke/costumes/savage.png", {
        x: 274,
        y: 324,
      }),
      new Costume("super rare", "./_8BitMonke/costumes/super rare.png", {
        x: 264,
        y: 303,
      }),
      new Costume("exotic", "./_8BitMonke/costumes/exotic.png", {
        x: 284,
        y: 318,
      }),
      new Costume("ligma exotic", "./_8BitMonke/costumes/ligma exotic.png", {
        x: 319,
        y: 360,
      }),
      new Costume("Scratch", "./_8BitMonke/costumes/Scratch.svg", {
        x: 107.83447257651079,
        y: 160.50348008225603,
      }),
      new Costume(
        "SMOL Water mutated: SCRATCH",
        "./_8BitMonke/costumes/SMOL Water mutated: SCRATCH.svg",
        { x: 79.83447291100686, y: 93.50347620981861 }
      ),
      new Costume(
        "Fisher {Fan suggested",
        "./_8BitMonke/costumes/Fisher {Fan suggested.png",
        { x: 254, y: 324 }
      ),
      new Costume("YOU!", "./_8BitMonke/costumes/YOU!.png", { x: 275, y: 352 }),
      new Costume("Secret Monke", "./_8BitMonke/costumes/Secret Monke.png", {
        x: 250,
        y: 272,
      }),
      new Costume(
        "URANIUM Mutated: Scratch Monke",
        "./_8BitMonke/costumes/URANIUM Mutated: Scratch Monke.svg",
        { x: 115.83447898028881, y: 153.50347077408608 }
      ),
      new Costume("?pi monke", "./_8BitMonke/costumes/?pi monke.svg", {
        x: 141.8344698511344,
        y: 178.5034764031647,
      }),
    ];

    this.sounds = [
      new Sound(
        "8-bit-powerup-6768",
        "./_8BitMonke/sounds/8-bit-powerup-6768.mp3"
      ),
      new Sound(
        "8-bit-logo-291104",
        "./_8BitMonke/sounds/8-bit-logo-291104.mp3"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "hands" }, this.whenIReceiveHands),
      new Trigger(Trigger.KEY_PRESSED, { key: "x" }, this.whenKeyXPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Save code plz" },
        this.whenIReceiveSaveCodePlz
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.KEY_PRESSED, { key: "g" }, this.whenKeyGPressed),
      new Trigger(Trigger.BROADCAST, { name: "Autos" }, this.whenIReceiveAutos),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Save_end" },
        this.whenIReceiveSaveEnd
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked11),
      new Trigger(Trigger.BROADCAST, { name: "monke" }, this.whenIReceiveMonke),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked12),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked13),
    ];

    this.vars.value = 0;
    this.vars.c = 0;

    this.watchers.value = new Watcher({
      label: "_8BitMonke: Value",
      style: "large",
      visible: false,
      value: () => this.vars.value,
      x: 246,
      y: 122,
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "*-bit monkey";
    this.y = 0;
    this.x = 0;
  }

  *whenIReceiveHands() {
    for (let i = 0; i < 3; i++) {
      yield* this.wait(0.2);
      this.costume = "*-bit monkey2";
      yield* this.wait(0.2);
      this.costume = "*-bit monkey";
      yield;
    }
    yield* this.allowRoll();
    return;
  }

  *randMonke() {
    this.stage.vars.monkeName = "";
    this.stage.watchers.monkeName.visible = true;
    this.stage.vars.rolling = 1;
    if (
      this.random(1, this.toNumber(this.stage.vars.commonMonkeRarity)) === 1
    ) {
      this.stage.vars.monkeName = "common monke 1/2";
      this.stage.vars.monee += 0.5;
      this.costume = "*-bit monkey";
    } else {
      if (this.random(1, 4) === 1) {
        this.stage.vars.monkeName = "uncommon monke 1/4";
        this.stage.vars.monee++;
        this.costume = "uncommon";
      } else {
        if (this.random(1, 8) === 1) {
          this.stage.vars.monkeName = "rare monke 1/8";
          this.stage.vars.monee += 2;
          this.costume = "rare";
        } else {
          if (this.random(1, 16) === 1) {
            this.stage.vars.monkeName = "ligma mutated: common monke 1/16";
            this.stage.vars.monee += 4;
            this.costume = "ligma common";
            this.broadcast("monke");
          } else {
            if (this.random(1, 32) === 1) {
              this.stage.vars.monkeName = "water mutated: rare monke 1/32";
              this.stage.vars.monee += 6;
              this.costume = "water rare";
              this.broadcast("monke");
            } else {
              if (this.random(1, 64) === 1) {
                this.stage.vars.monkeName = "Savage monke 1/64";
                this.stage.vars.monee += 12;
                this.costume = "savage";
                this.broadcast("monke");
              }
              if (this.random(1, 128) === 1) {
                this.stage.vars.monkeName = "SUPER RARE monke 1/128";
                this.stage.vars.monee += 48;
                this.costume = "super rare";
                this.broadcast("monke");
              } else {
                if (this.random(1, 256) === 1) {
                  this.stage.vars.monkeName = "EXOTIC monke 1/256";
                  this.stage.vars.monee += 75;
                  this.costume = "exotic";
                  this.broadcast("monke");
                } else {
                  if (this.random(1, 512) === 1) {
                    this.stage.vars.monkeName =
                      "ligma mutated: EXOTIC monke 1/512";
                    this.stage.vars.monee += 150;
                    this.costume = "ligma exotic";
                    this.broadcast("monke");
                  } else {
                    if (this.random(1, 1024) === 1) {
                      this.stage.vars.monkeName = "SCRATCH Monke 1/1024";
                      this.stage.vars.monee += 200;
                      this.costume = "Scratch";
                      this.broadcast("monke");
                    } else {
                      if (this.random(1, 2048) === 1) {
                        this.stage.vars.monkeName =
                          "SMOL Water mutated: SCRATCH Monke 1/2048";
                        this.stage.vars.monee += 275;
                        this.costume = "SMOL Water mutated: SCRATCH";
                        this.broadcast("monke");
                      } else {
                        if (this.random(1, 4096) === 1) {
                          this.stage.vars.monkeName =
                            "[Fan EXOTIC] FISHER Monke 1/4096";
                          this.stage.vars.monee += 325;
                          this.costume = "Fisher {Fan suggested";
                        } else {
                          if (this.random(1, 8192) === 1) {
                            this.stage.vars.monkeName =
                              /* no username */ "" + " Monke 1/8192";
                            this.stage.vars.monee += 375;
                            this.costume = "YOU!";
                          } else {
                            if (this.random(1, 10000) === 1) {
                              if (this.random(1, 2) === 1) {
                                this.stage.vars.monkeName =
                                  "Urine Mutated: Scratch Monke 1/20000";
                                this.stage.vars.monee += 9999;
                                this.costume = "?pi monke";
                              } else {
                                this.stage.vars.monkeName =
                                  "URANIUM Mutated: Scratch Monke 1/10000";
                                this.stage.vars.monee += 600;
                                this.costume = "URANIUM Mutated: Scratch Monke";
                              }
                            } else {
                              yield* this.randMonkeNoCoodown();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (
      !this.stringIncludes(
        this.stage.vars.monkes.join(" "),
        this.toString(this.stage.vars.monkeName)
      )
    ) {
      this.stage.vars.monkes.push(this.stage.vars.monkeName);
      yield* this.redo();
    }
    yield* this.wait(this.toNumber(this.stage.vars.cooldwon));
    this.stage.vars.rolling = 0;
  }

  *allowRoll() {
    while (true) {
      if (
        this.keyPressed("space") &&
        this.toString(this.stage.vars.autoRol) === "false"
      ) {
        this.stage.watchers.monkeName.visible = true;
        yield* this.startSound("8-bit-powerup-6768");
        this.costume = "*-bit monkey2";
        yield* this.wait(0.2);
        this.costume = "*-bit monkey";
        yield* this.randMonke();
      }
      yield;
    }
  }

  *randMonkeNoCoodown() {
    this.stage.vars.monkeName = "";
    if (
      this.random(1, this.toNumber(this.stage.vars.commonMonkeRarity)) === 1
    ) {
      this.stage.vars.monkeName = "common monke 1/2";
      this.stage.vars.monee += 0.5;
      this.costume = "*-bit monkey";
    } else {
      if (this.random(1, 4) === 1) {
        this.stage.vars.monkeName = "uncommon monke 1/4";
        this.stage.vars.monee++;
        this.costume = "uncommon";
      } else {
        if (this.random(1, 8) === 1) {
          this.stage.vars.monkeName = "rare monke 1/8";
          this.stage.vars.monee += 2;
          this.costume = "rare";
        } else {
          if (this.random(1, 16) === 1) {
            this.stage.vars.monkeName = "ligma mutated: common monke 1/16";
            this.stage.vars.monee += 4;
            this.costume = "ligma common";
            this.broadcast("monke");
          } else {
            if (this.random(1, 32) === 1) {
              this.stage.vars.monkeName = "water mutated: rare monke 1/32";
              this.stage.vars.monee += 6;
              this.costume = "water rare";
            } else {
              if (this.random(1, 64) === 1) {
                this.stage.vars.monkeName = "Savage monke 1/64";
                this.stage.vars.monee += 12;
                this.costume = "savage";
              }
              if (this.random(1, 128) === 1) {
                this.stage.vars.monkeName = "SUPER RARE monke 1/128";
                this.stage.vars.monee += 48;
                this.costume = "super rare";
              } else {
                if (this.random(1, 256) === 1) {
                  this.stage.vars.monkeName = "EXOTIC monke 1/256";
                  this.stage.vars.monee += 75;
                  this.costume = "exotic";
                } else {
                  if (this.random(1, 512) === 1) {
                    this.stage.vars.monkeName =
                      "ligma mutated: EXOTIC monke 1/512";
                    this.stage.vars.monee += 150;
                    this.costume = "ligma exotic";
                  } else {
                    if (this.random(1, 1024) === 1) {
                      this.stage.vars.monkeName = "SCRATCH Monke 1/1024";
                      this.stage.vars.monee += 200;
                      this.costume = "Scratch";
                    } else {
                      if (this.random(1, 2048) === 1) {
                        this.stage.vars.monkeName =
                          "SMOL Water mutated: SCRATCH monke";
                        this.stage.vars.monee += 275;
                        this.costume = "SMOL Water mutated: SCRATCH";
                      } else {
                        if (this.random(1, 4096) === 1) {
                          this.stage.vars.monkeName =
                            "[Fan EXOTIC] FISHER Monke";
                          this.stage.vars.monee += 325;
                          this.costume = "Fisher {Fan suggested";
                        } else {
                          if (this.random(1, 8192) === 1) {
                            this.stage.vars.monkeName =
                              /* no username */ "" +
                              this.toString(this.stage.vars.monke18192);
                            this.stage.vars.monee += 375;
                            this.costume = "YOU!";
                          } else {
                            if (this.random(1, 16384) === 1) {
                              if (this.random(1, 2) === 1) {
                                this.stage.vars.monkeName =
                                  "Urine Mutated: Scratch Monke 1/20000";
                                this.stage.vars.monee += 9999;
                                this.costume = "?pi monke";
                              } else {
                                this.stage.vars.monkeName =
                                  "URANIUM Mutated: Scratch Monke 1/10000";
                                this.stage.vars.monee += 600;
                                this.costume = "URANIUM Mutated: Scratch Monke";
                              }
                            } else {
                              yield* this.randMonkeNoCoodown();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (
      !this.stringIncludes(
        this.stage.vars.monkes.join(" "),
        this.toString(this.stage.vars.monkeName)
      )
    ) {
      this.stage.vars.monkes.push(this.stage.vars.monkeName);
      yield* this.redo();
    }
  }

  *whenKeyXPressed() {
    yield* this.askAndWait("What Monke costume would you like to see?");
    while (true) {
      if (this.arrayIncludes(this.stage.vars.monkes, this.answer)) {
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 0)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 0);
          this.costume = "*-bit monkey";
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 1)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 1);
          this.costume = "uncommon";
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 2)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 2);
          this.costume = "rare";
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 3)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 3);
          this.costume = "ligma common";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 4)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 4);
          this.costume = "water rare";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 5)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 5);
          this.costume = "savage";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 6)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 6);
          this.costume = "super rare";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 7)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 7);
          this.costume = "exotic";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 8)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 8);
          this.costume = "ligma exotic";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 9)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(this.stage.vars.allMonkes, 9);
          this.costume = "Scratch";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 10)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(
            this.stage.vars.allMonkes,
            10
          );
          this.costume = "SMOL Water mutated: SCRATCH";
          this.broadcast("monke");
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 11)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(
            this.stage.vars.allMonkes,
            11
          );
          this.costume = "Fisher {Fan suggested";
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 13)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(
            this.stage.vars.allMonkes,
            13
          );
          this.costume = "YOU!";
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 14)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(
            this.stage.vars.allMonkes,
            14
          );
          this.costume = "URANIUM Mutated: Scratch Monke";
        }
        if (
          this.compare(
            this.answer,
            this.itemOf(this.stage.vars.allMonkes, 15)
          ) === 0
        ) {
          this.stage.vars.monkeName = this.itemOf(
            this.stage.vars.allMonkes,
            15
          );
          this.costume = "?pi monke";
        }
      } else {
        if (
          !this.stringIncludes(
            this.stage.vars.monkes.join(" "),
            this.toString(this.stage.vars.uselessVar)
          ) &&
          this.compare(this.answer, this.stage.vars.uselessVar) === 0
        ) {
          this.costume = "Secret Monke";
          this.stage.vars.monkeName = "Secret Monke";
          this.stage.vars.monkes.push("Secret Monke");
        }
        if (
          this.arrayIncludes(this.stage.vars.allMonkes, this.answer) &&
          !(this.compare(this.answer, this.stage.vars.uselessVar) === 0)
        ) {
          yield* this.sayAndWait("You haven’t unlocked this Monke yet!", 1.5);
        }
        if (
          !this.stringIncludes(this.stage.vars.allMonkes.join(" "), this.answer)
        ) {
          yield* this.sayAndWait("Invalid", 1);
        }
      }
      return;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(0.5);
    this.stage.vars.allMonkes.push("common monke 1/2");
    this.stage.vars.allMonkes.push("uncommon monke 1/4");
    this.stage.vars.allMonkes.push("rare monke 1/8");
    this.stage.vars.allMonkes.push("ligma mutated: common monke 1/16");
    this.stage.vars.allMonkes.push("water mutated: rare monke 1/32");
    this.stage.vars.allMonkes.push("Savage monke 1/64");
    this.stage.vars.allMonkes.push("SUPER RARE monke 1/128");
    this.stage.vars.allMonkes.push("EXOTIC monke 1/256");
    this.stage.vars.allMonkes.push("ligma mutated: EXOTIC monke 1/512");
    this.stage.vars.allMonkes.push("SCRATCH Monke 1/1024");
    this.stage.vars.allMonkes.push("SMOL Water mutated: SCRATCH Monke 1/2048");
    this.stage.vars.allMonkes.push("[Fan EXOTIC] FISHER Monke 1/4096");
    this.stage.vars.allMonkes.push(this.stage.vars.uselessVar);
    this.stage.vars.allMonkes.push(/* no username */ "" + " Monke 1/8192");
    this.stage.vars.allMonkes.push("URANIUM Mutated: Scratch Monke 1/10000");
    this.stage.vars.allMonkes.push("Urine Mutated: Scratch Monke 1/20000");
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.uselessVar = "Secret Monke";
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.costume.name === "YOU!") {
        this.effects.color += 5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (!(this.costume.name === "YOU!")) {
        this.effects.clear();
      }
      yield;
    }
  }

  *write(text) {
    this.stage.vars.saveCode =
      this.toString(this.stage.vars.saveCode) + this.toString(text);
    this.stage.vars.saveCode = this.toString(this.stage.vars.saveCode) + "|";
  }

  *readValue() {
    this.vars.value = "";
    while (true) {
      this.stage.vars.cInvis = this.letterOf(
        this.stage.vars.savecodeRead,
        this.toNumber(this.stage.vars.saveIdx)
      );
      this.vars.c = this.letterOf(
        this.stage.vars.savecodeRead,
        this.stage.vars.saveIdx - 1
      );
      this.stage.vars.saveIdx++;
      if (
        this.toNumber(this.stage.vars.cInvis) === 0 &&
        this.toString(this.vars.c) === "|"
      ) {
        this.stage.vars.saveIdx++;
        return;
      }
      if (this.toString(this.vars.c) === "|") {
        return;
      }
      this.vars.value =
        this.toString(this.vars.value) + this.toString(this.vars.c);
      yield;
    }
  }

  *whenKeySPressed() {
    yield* this.askAndWait("Enter save code");
    this.stage.vars.savecodeRead = "";
    this.stage.vars.saveIdx = 1;
    this.stage.vars.savecodeRead = this.answer;
    this.stage.vars.svaing = 1;
    this.stage.vars.autoRol = "false";
    if (this.answer === "Exit") {
      return;
    }
    this.watchers.value.visible = true;
    this.broadcast("Saving…");
    this.stage.vars.monkes = [];
    yield* this.readValue();
    this.stage.vars.autoRol2 = this.vars.value;
    yield* this.readValue();
    this.stage.vars.cooldown01 = this.vars.value;
    yield* this.readValue();
    this.stage.vars.cooldown2 = this.vars.value;
    yield* this.readValue();
    this.stage.vars.cooldwon = this.vars.value;
    yield* this.readValue();
    this.stage.vars.monee = this.vars.value;
    yield* this.readValue();
    this.stage.vars.monkeNumber = this.vars.value;
    yield* this.readValue();
    this.stage.vars.require200 = this.vars.value;
    yield* this.readValue();
    this.stage.vars.require500 = this.vars.value;
    yield* this.readValue();
    this.stage.vars.rolling = this.vars.value;
    yield* this.readValue();
    this.stage.vars.showShop = this.vars.value;
    while (!(this.toNumber(this.vars.value) === 0)) {
      yield* this.readValue();
      this.stage.vars.monkeName = this.vars.value;
      if (
        this.arrayIncludes(
          this.stage.vars.allMonkes,
          this.stage.vars.monkeName
        ) &&
        !(this.toNumber(this.stage.vars.monkeName) === 0)
      ) {
        this.stage.vars.monkes.push(this.stage.vars.monkeName);
      }
      yield;
    }
    if (
      this.compare(this.stage.vars.monee, 100) > 0 ||
      this.toNumber(this.stage.vars.monee) === 100
    ) {
      this.broadcast("Show the shop from save ");
    }
    yield* this.readValue();
    this.stage.vars.commonMonkeRarity = this.vars.value;
    yield* this.readValue();
    this.stage.vars.ecommonrdeuec = this.vars.value;
    this.vars.value = "";
    this.broadcast("Save_end");
    this.stage.vars.svaing = 0;
    this.watchers.value.visible = false;
    return;
  }

  *whenGreenFlagClicked6() {
    this.vars.value = "";
    this.stage.vars.monkeVar = "";
  }

  *whenIReceiveSaveCodePlz() {
    this.stage.vars.saveCode = "";
    yield* this.write(this.stage.vars.autoRol2);
    yield* this.write(this.stage.vars.cooldown01);
    yield* this.write(this.stage.vars.cooldown2);
    yield* this.write(this.stage.vars.cooldwon);
    yield* this.write(this.stage.vars.monee);
    yield* this.write(this.stage.vars.monkeNumber);
    yield* this.write(this.stage.vars.require200);
    yield* this.write(this.stage.vars.require500);
    yield* this.write(this.stage.vars.rolling);
    yield* this.write(this.stage.vars.showShop);
    yield* this.write(this.stage.vars.monkeVar);
    yield* this.write(this.stage.vars.commonMonkeRarity);
    yield* this.write(this.stage.vars.ecommonrdeuec);
  }

  *whenGreenFlagClicked7() {
    this.stage.vars.savecodeRead = "";
    this.stage.vars.svaing = 0;
  }

  *whenGreenFlagClicked8() {
    this.stage.vars.lsitMonke = [];
  }

  *redo() {
    this.stage.vars.lsitMonke.push(
      this.toString(
        this.itemOf(this.stage.vars.monkes, this.stage.vars.monkes.length - 1)
      ) + "|"
    );
    this.stage.vars.monkeVar = this.stage.vars.lsitMonke.join(" ");
    return;
  }

  *whenKeyGPressed() {
    if (this.toNumber(this.stage.vars.aaa) === 0) {
      this.stage.vars.aaa = 1;
      if (this.toNumber(this.stage.vars.autoRol2) === 1) {
        this.stage.vars.autoRol = "true";
        this.broadcast("Autos");
      }
    } else {
      if (this.toString(this.stage.vars.autoRol) === "true") {
        this.stage.vars.autoRol = "false";
      }
      this.stage.vars.aaa = 0;
      return;
    }
  }

  *whenIReceiveAutos() {
    while (this.toString(this.stage.vars.autoRol) === "true") {
      yield* this.randMonke();
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    this.stage.vars.commonMonkeRarity = 2;
  }

  *whenGreenFlagClicked10() {
    this.watchers.value.visible = false;
  }

  *whenIReceiveSaveEnd() {
    this.stage.vars.idxSaveAfterSave = 1;
    for (let i = 0; i < this.stage.vars.monkes.length; i++) {
      this.stage.vars.lsitMonke.push(
        this.toString(
          this.itemOf(
            this.stage.vars.monkes,
            this.stage.vars.idxSaveAfterSave - 1
          )
        ) + "|"
      );
      this.stage.vars.idxSaveAfterSave++;
      yield;
    }
    this.stage.vars.monkeVar = this.stage.vars.lsitMonke.join(" ");
    return;
  }

  *whenGreenFlagClicked11() {
    this.stage.watchers.monkeVar.visible = false;
  }

  *whenIReceiveMonke() {
    while (
      this.arrayIncludes(this.stage.vars.monkeNumbersEffect, this.costumeNumber)
    ) {
      this.y = Math.sin(this.degToRad(this.timer * 300)) * 4;
      yield;
    }
    this.y = 0;
  }

  *whenGreenFlagClicked12() {
    this.size = 50;
  }

  *whenGreenFlagClicked13() {
    this.stage.watchers.monkeNumbersEffect.visible = false;
    this.stage.vars.monkeNumbersEffect.push(6);
    this.stage.vars.monkeNumbersEffect.push(7);
    this.stage.vars.monkeNumbersEffect.push(8);
    this.stage.vars.monkeNumbersEffect.push(9);
    this.stage.vars.monkeNumbersEffect.push(10);
    this.stage.vars.monkeNumbersEffect.push(11);
    this.stage.vars.monkeNumbersEffect.push(12);
    this.stage.vars.monkeNumbersEffect.push(13);
  }
}
