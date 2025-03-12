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


//funcion actualizar lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    //limpiando la lista
    listaAmigos.innerHTML = "";

    //recorrer arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        //se agregan elementos a la lista por cada amigo 
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


//funcion sortear amigos
function sortearAmigo() {
    //Validacio de amigos disponibles
    if (amigos.length === 0) {
        alert("No es posible sortear, debe ingrear por lo menos 1 nombre");
    } else {
        //Se genera el indice aleatorio
        let i = Math.floor(Math.random() * amigos.length);

        //Se obtiene el nombre sorteado
        let nombreAmigoSecreto = amigos[i];

        //Se muestra el resultado
        document.getElementById("resultado").innerHTML = "<li>El amigo secreto es: " + nombreAmigoSecreto + "</li>";
    }
}