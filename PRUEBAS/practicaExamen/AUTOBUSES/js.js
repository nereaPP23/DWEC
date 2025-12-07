class Linea{
    constructor(numLinea, origen, destino, horaSalida, intervalo){
        this.numLinea = numLinea;
        this.origen = origen;
        this.destino = destino;
        this.horaSalida = horaSalida;
        this.intervalo = intervalo;
    }
}

class Paradas{
    constructor(numParada, numLinea, localidad, intervalo){
        this.numParada = numParada;
        this.numLinea = numLinea;
        this.localidad = localidad;
        this.intervalo = intervalo;
    }
}


const lineas = JSON.parse(localStorage.getItem("lineas")) || [];
const paradas = JSON.parse(localStorage.getItem("paradas")) || [];

//Funcion guardar datos
function guardarDatos() {
    localStorage.setItem("lineas", JSON.stringify(lineas));
    localStorage.setItem("paradas", JSON.stringify(paradas));
}




//FUNCIONES LINEAS

//Funcion añadir linea
function addLinea() {
    const numLinea = parseInt(document.getElementById("numLinea").value)
    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const horaSalida = document.getElementById("horaSalida").value.trim();
    const intervalo = document.getElementById("intervalo").value.trim();

    //validaciones
    if (!isNaN(numLinea) && origen && destino && horaSalida && intervalo) {
        const lineaExistente = lineas.find(n => n.numLinea===numLinea);

        if(lineaExistente){
            alert(`Ya existe una linea con el numero ${numLinea}`)
        }else{
            if(numLinea<1){
                alert("El número de linea debe ser mayor que 1");
                return;
            }else if(origen===destino){
                alert("El origen no puede ser igual al destino");
                return;
            }else{
                lineas.push(new Linea(numLinea, origen, destino, horaSalida, intervalo));
                guardarDatos();
                alert(`Linea añadida: ${numLinea}`);
                mostrarLineas();
                clearInputs();
            }
            
        }
    } else {
        alert("Por favor, introduce datos válidos.");
    }
}

//Eliminar linea
function eliminarLinea(){
    const numLinea = parseInt(document.getElementById("numLinea").value);
    const linea = lineas.find(n => n.numLinea===numLinea);

    if(linea){
        lineas.splice(lineas.indexOf(linea), 1);
        guardarDatos();
        alert(`Linea eliminada: ${numLinea}`);
        mostrarLineas();
    }else{
        alert("Linea no encontrada.");
    }
}

//Modificar linea
function modificarLinea(){
    const numLinea = parseInt(document.getElementById("numLinea").value)
    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const horaSalida = document.getElementById("horaSalida").value.trim();
    const intervalo = document.getElementById("intervalo").value.trim();

    const linea = lineas.find(n => n.numLinea === numLinea);
    if (linea) {
        if(origen===destino){
            alert("El origen no puede ser igual al destino");
            return;
        }else{
            linea.origen = origen;
            linea.destino = destino;
            linea.horaSalida = horaSalida;
            linea.intervalo = intervalo;
            guardarDatos();
            alert(`Linea modificada: ${numLinea}`);
            mostrarLineas();
            clearInputs();
        }
    } else {
        alert("Linea no encontrada.");
    }
}

//Mostrar lineas
function mostrarLineas() {
    const tbody = document.querySelector("#tablaLineas tbody");
    tbody.innerHTML = ""; // limpiar antes de volver a pintar

    lineas.forEach(linea => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${linea.numLinea}</td>
            <td>${linea.origen}</td>
            <td>${linea.destino}</td>
            <td>${linea.horaSalida}</td>
            <td>${linea.intervalo}</td>
        `;

        tbody.appendChild(fila);
    });
}


//FUNCIONES PARADAS

//Añadir parada
function addParada() {
    const numParada = parseInt(document.getElementById("numParada").value);
    const numLinea = parseInt(document.getElementById("numLineaParada").value);
    const localidad = document.getElementById("localidad").value.trim();
    const intervalo = document.getElementById("intervaloParada").value.trim();

    //validaciones
    if (!isNaN(numParada) && !isNaN(numLinea) && localidad && intervalo) {
        const paradaExistente = paradas.find(p => p.numParada===numParada);

        if(paradaExistente){
            alert(`Ya existe una parada con el numero ${numParada}`)
        }else{
            const linea = lineas.find(l => l.numLinea===numLinea)
            if(!linea){
                alert("La linea indicada no existe");
                return;
            }else if(localidad===linea.destino){
                const paradasLinea = paradas.filter(p => p.numLinea === numLinea);
                const maxIntervalo = paradasLinea.reduce((max, p) => 
                    p.intervalo > max ? p.intervalo : max, "00:00");
                if (intervalo <= maxIntervalo) {
                    alert("La parada destino debe tener el intervalo mayor de la línea");
                return;
                }
            }else{
                paradas.push(new Paradas(numParada, numLinea, localidad, intervalo));
                guardarDatos();
                alert(`Parada añadida: ${numParada}`);
                mostrarParadas();
                clearInputsParadas();
            }
            
        }
    } else {
        alert("Por favor, introduce datos válidos.");
    }
}

//Eliminar parada
function eliminarParada(){
    const numParada = parseInt(document.getElementById("numParada").value);
    const parada = paradas.find(n => n.numParada===numParada);

    if(parada){
        paradas.splice(paradas.indexOf(parada), 1);
        guardarDatos();
        alert(`Parada eliminada: ${numParada}`);
        mostrarParadas();
    }else{
        alert("Parada no encontrada.");
    }
}

//Modificar parada
function modificarParada(){
    const numParada = parseInt(document.getElementById("numParada").value);
    const numLinea = parseInt(document.getElementById("numLineaParada").value);
    const localidad = document.getElementById("localidad").value.trim();
    const intervalo = document.getElementById("intervaloParada").value.trim();


    const parada = paradas.find(n => n.numParada === numParada);
    if (parada) {
        const linea = lineas.find(l => l.numLinea===numLinea)
        if(!linea){
            alert("La linea indicada no existe");
            return;
        }else if(localidad===linea.destino){
            const paradasLinea = paradas.filter(p => p.numLinea === numLinea);
            const maxIntervalo = paradasLinea.reduce((max, p) => 
                p.intervalo > max ? p.intervalo : max, "00:00");
            if (intervalo <= maxIntervalo) {
                alert("La parada destino debe tener el intervalo mayor de la línea");
                return;
                }
            }else{
                parada.numLinea = numLinea;
                parada.localidad = localidad;
                parada.intervalo = intervalo;
                guardarDatos();
                alert(`Parada modificada: ${numParada}`);
                mostrarParadas();
                clearInputsParadas();
            }
    } else {
        alert("Parada no encontrada.");
    }
}


//Mostrar paradas
function mostrarParadas() {
    const tbody = document.querySelector("#tablaParadas tbody");
    tbody.innerHTML = ""; // limpiar antes de volver a pintar

    paradas.forEach(parada => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${parada.numParada}</td>
            <td>${parada.numLinea}</td>
            <td>${parada.localidad}</td>
            <td>${parada.intervalo}</td>
        `;

        tbody.appendChild(fila);
    });
}


//Funcion detalles
function detalleLinea() {
  const numLinea = parseInt(document.getElementById("detalleLinea").value);
  const tbody = document.querySelector("#tablaDetalles tbody");
  if(!tbody) return;
  tbody.innerHTML = "";

  const paradasLinea = paradas.filter(p => p.numLinea === numLinea).sort((a,b) => a.intervalo.localeCompare(b.intervalo));

  paradasLinea.forEach(p => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.numParada}</td>
      <td>${p.localidad}</td>
      <td>${p.intervalo}</td>
    `;
    tbody.appendChild(fila);
  });
}



//Limpiar inputs lineas
function clearInputs() {
  document.getElementById("numLinea").value = "";
  document.getElementById("origen").value = "";
  document.getElementById("destino").value = "";
  document.getElementById("horaSalida").value = "";
  document.getElementById("intervalo").value = "";
}


// Limpiar inputs paradas
function clearInputsParadas() {
    document.getElementById("numParada").value = "";
    document.getElementById("numLineaParada").value = "";
    document.getElementById("localidad").value = "";
    document.getElementById("intervaloParada").value = "";
}


//Eventos
document.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById("btnAddLinea")) {
    document.getElementById("btnAddLinea").addEventListener("click", addLinea);
    document.getElementById("btnEliminarLinea").addEventListener("click", eliminarLinea);
    document.getElementById("btnModifyLinea").addEventListener("click", modificarLinea);
    mostrarLineas();
  }
  if(document.getElementById("btnAddParada")) {
    document.getElementById("btnAddParada").addEventListener("click", addParada);
    document.getElementById("btnEliminarParada").addEventListener("click", eliminarParada);
    document.getElementById("btnModifyParada").addEventListener("click", modificarParada);
    mostrarParadas();
  }
  if(document.getElementById("btnDetalles")) {
    document.getElementById("btnDetalles").addEventListener("click", detalleLinea );
  }
});