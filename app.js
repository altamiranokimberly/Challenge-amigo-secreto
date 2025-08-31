// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let nameAmigo = "";
let contadorAmigos= 0;
let textoCompleto = '';


function agregarAmigo(){
    nameAmigo = document.querySelector('#amigo').value;
    if(validarEntrada(nameAmigo)){
        console.log(nameAmigo);
        listaAmigos.push(nameAmigo);
        visualizarLista('listaAmigos', `Amigo ${contadorAmigos+1} : ${listaAmigos[contadorAmigos]} `);
        contadorAmigos++;
    }
}

function validarEntrada(nameAmigo){
    if(nameAmigo==''){
        alert('Por favor ingrese un nombre válido, no deje el campo vacío')
        return false;
    }else{
        return true;
    }
}

function visualizarLista(elemento, texto){
    textoCompleto += '<li>' + texto + '</li>';
    console.log(textoCompleto);
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = textoCompleto ;
}

function sortearAmigo(){//En este caso por que la lista empieza desde 0 no le agregamos el +1 al floor
    if(listaAmigos.length != 0){
        let numGenerado = Math.floor(Math.random()*contadorAmigos);
        document.getElementById('resultado').innerHTML= `Tu amigo secreto es ${listaAmigos[numGenerado]}`;
    }
    else{
        alert('No hay amigos en la lista para sortear, Ingrese al menos un amigo')
    } 
}
