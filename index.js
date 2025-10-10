import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _8BitMonke from "./_8BitMonke/_8BitMonke.js";
import System from "./System/System.js";
import IntroText from "./IntroText/IntroText.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Shop from "./Shop/Shop.js";
import Button3 from "./Button3/Button3.js";
import CooldownReduce from "./CooldownReduce/CooldownReduce.js";
import Getsave from "./Getsave/Getsave.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Reducer from "./Reducer/Reducer.js";
import AutoRolShop from "./AutoRolShop/AutoRolShop.js";
import Instructions from "./Instructions/Instructions.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  _8BitMonke: new _8BitMonke({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 10,
  }),
  System: new System({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  IntroText: new IntroText({
    x: 9,
    y: 97,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Sprite1: new Sprite1({
    x: 5,
    y: -104,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Shop: new Shop({
    x: -211,
    y: 55,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 15,
    visible: false,
    layerOrder: 4,
  }),
  Button3: new Button3({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
  CooldownReduce: new CooldownReduce({
    x: -190,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  Getsave: new Getsave({
    x: -180,
    y: 65,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  Sprite3: new Sprite3({
    x: 11,
    y: 4,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12,
  }),
  Reducer: new Reducer({
    x: 193,
    y: 69,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  AutoRolShop: new AutoRolShop({
    x: 193,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9,
  }),
  Instructions: new Instructions({
    x: -2,
    y: -164,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
