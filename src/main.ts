import { animal } from "./modelo/animal/animal";
import { gato } from "./modelo/animal/gato";

let gatito : animal;

gatito = new gato('misifus','siames');
console.log('gato: ',gatito);
gatito.desplazar();
(gatito as gato).ronronear();
(<animal>gatito).desplazar();