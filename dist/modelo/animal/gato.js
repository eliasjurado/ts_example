"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var gato = /** @class */ (function (_super) {
    __extends(gato, _super);
    function gato(nombre, raza) {
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        return _this;
    }
    gato.prototype.desplazar = function () {
        console.log(this._nombre + " camina sigilosamente");
    };
    gato.prototype.ronronear = function () {
        console.log(this._nombre + " est\u00E1 ronroneando");
    };
    return gato;
}(animal_1.animal));
exports.gato = gato;
