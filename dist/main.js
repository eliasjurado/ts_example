"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelo/animal/gato");
var gatito;
gatito = new gato_1.gato('misifus', 'siames');
console.log('gato: ', gatito);
gatito.desplazar();
gatito.ronronear();
