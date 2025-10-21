class Alumno {
    //dni, ciclo y año de finalización 
    constructor(DNI, ciclo, anyo){
        this.DNI = DNI;
        this.ciclo = ciclo;
        this.anyo = anyo;
    }
    getDNI(){
        return this.DNI;
    }
    setDNI(value){
        this.DNI = value;
    }
    getCiclo(){
        return this.ciclo;
    }
    setCiclo(value){
        this.ciclo = value;
    }
    getAnyo(){
        return this.anyo;
    }
    setAnyo(value){
        this.anyo = value;
    }
}


class Empresa {
    ciclos = [];
    alumnos = [];
    constructor(cif){
        this.cif = cif;
    }
    getCif(){
        return this.cif;
    }
    setCif(value){
        this.cif = value;
    }

    alta(alumno){
        this.alumnos.push(alumno);
    }

    baja(alumno){
        this.alumnos = this.alumnos.filter((a) => (a.DNI !==DNI));
    }
    alumnosPorCiclo(ciclo){
        let busqueda = [];
        busqueda = this.alumnos.filter((a) => a.ciclo === ciclo); //filter es como un where de sql
        return busqueda;
    }
}

let empresa1 = new Empresa("B12345678");
empresa1.ciclos.push('DAW', 'DAM');
empresa1.alta(new Alumno("A12345678",'DAW',2025));
empresa1.alta(new Alumno("C23874739",'DAW',2024));
empresa1.alta(new Alumno("A12345X18",'DAM',2025));
empresa1.alta(new Alumno("T23874739",'DAW',2025));
empresa1.alta(new Alumno("A1234Y678",'DAM',2023));
empresa1.alta(new Alumno("C238J8739",'DAW',2024));
//empresa1.baja("C23874739");
console.log(empresa1.alumnosPorCiclo('DAW'));

