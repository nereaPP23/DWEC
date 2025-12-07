function esPar(n) { return n%2 == 0; }
matriz = [5,2,3,4,5,6,7,8,9,10];
let numerosPares = matriz.filter(esPar);
console.log(numerosPares);

let personas = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 }
];

let nombres = personas.map(p => p.nombre);

console.log(nombres);