// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para alamacenar nombres
let amigos = [];

//funcion agregar amigos
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    //validar campo vacio
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        //agregar nombre 
        amigos.push(nombre);
    }

    //limpiar caja de texto
    document.getElementById("amigo").value = "";

    //Actualizando la lista en el front
    actualizarListaAmigos();
}