"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cao_1 = __importDefault(require("./Cao"));
const Gato_1 = __importDefault(require("./Gato"));
const Vaca_1 = __importDefault(require("./Vaca"));
const cao = new Cao_1.default();
cao.emitirSom("au");
const gato = new Gato_1.default();
gato.emitirSom("miau");
const vaca = new Vaca_1.default();
vaca.emitirSom("mu");
