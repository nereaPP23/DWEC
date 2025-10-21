class Matriz {
    constructor(ancho, alto, elemento= (i,j)=>undefined){
        this.ancho = ancho;
        this.alto = alto;
        this.contenido = [];
        for (let i = 0; i < this.alto; i++) {
            for (let j = 0; j < this.ancho; j++) {
                this.contenido[j*ancho+i] = elemento(i,j);
            }
        }
    }
    get(i,j){
        return this.contenido[j*this.ancho+i];
    }
    set(i,j,value){
        this.contenido[j*this.alto+i] = value;
    }    
}
let mat = new Matriz(3,2);
mat.set(0,0,12);
mat.set(0,1,367);
mat.set(0,2,36);

mat.set(1,0,33);
mat.set(1,1,4376);
mat.set(1,2,8);

console.log(mat);