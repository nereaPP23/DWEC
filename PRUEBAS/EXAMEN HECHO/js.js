class Operacion {
    constructor(id, nombreApe, producto, ope, cantidad){
        this._id=id;
        this._nombreApe=nombreApe;
        this._producto=producto;
        this._ope=ope;
        this._cantidad=cantidad;

    }

    //get tiene otro nombre distinto Id != id
    get Id (){
        return this._id;
    }

   
}


let operaciones = [];
let operacionesSospechosas = [];