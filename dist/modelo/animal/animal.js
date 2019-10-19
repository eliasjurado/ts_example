"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal = /** @class */ (function () {
    function animal(_nombre) {
        this._nombre = _nombre;
    }
    Object.defineProperty(animal.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return animal;
}());
exports.animal = animal;
