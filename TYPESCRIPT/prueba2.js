function encontrarTodos(elto, matriz){ // Encuentra todos los elementos
let encontrados = [];
let pos = matriz.indexOf(elto);
while (pos!=-1)
{
encontrados.push(pos);
pos = matriz.indexOf(elto, ++pos);
}
return encontrados;
}
console.log(encontrarTodos(5, [5,2,3,4,5,6,7,8,9,10]));