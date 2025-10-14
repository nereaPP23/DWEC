import MiClaseImportada, {hola} from "./modulo-export.js";
import * as todo from "./modulo-export.js";
console.log(hola());
const miObjeto = new MiClaseImportada();
console.log(miObjeto.adios());
console.log(todo.hola());
const miObjeto2 = new todo.default();
console.log(miObjeto2.adios());