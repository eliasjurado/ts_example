import { animal } from "./animal";

export class gato extends animal {

    constructor(nombre:string, private raza:string) {
        super(nombre);
    }
    desplazar():void{
        console.log(`${this._nombre} camina sigilosamente`);
    }

    ronronear():void{
        console.log(`${this._nombre} está ronroneando`);
    }
}