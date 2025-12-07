class Rectangulo {
    private altura: number;
    private ancho: number;
        constructor(altura: number = 0, ancho: number = 0) {
        this.altura = altura;
        this.ancho = ancho;
        }
    get Altura(): number {
    return this.altura;
    }
    set Altura(valor: number) {
    this.altura = valor;
    }
    get Ancho(): number {
    return this.ancho;
    }
    set Ancho(valor: number) {
    this.ancho = valor;
    }
}
    let rectangulo1 = new Rectangulo(10, 20);
    rectangulo1.Altura = 45;
    rectangulo1.Ancho = 22;
    console.log(
    `rectangulo1 tiene una altura de ${rectangulo1.Altura} y un ancho de
    ${rectangulo1.Ancho}`
);