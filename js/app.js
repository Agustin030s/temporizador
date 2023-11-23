const inputSegundos = parseInt(document.querySelector('#inputSegundos').value);
const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const inputMinutos = document.querySelector('#inputMinutos');
const horas = document.getElementById('horas');
const inputHoras = document.querySelector('#inputHoras');

const formTemporizador = document.getElementById('formTemporizador');

let intervalId;

let contadorSegundos = inputSegundos;
let contadorMinutos = inputMinutos;
let contadorHoras = inputHoras;

const decrementarSegundos = () =>{
    segundos.innerText = inputSegundos;
    if(contadorSegundos >= inputSegundos){
        contadorSegundos--;
        segundos.innerText = contadorSegundos;
    }else{
        contadorSegundos = 60;
        segundos.innerText = 60;

        decrementarMinutos();
    }
}

const decrementarMinutos = () => {
    contadorMinutos--;
    
    if (contadorMinutos >= 0) {
        minutos.innerText = contadorMinutos + ' : ';
    } else {
        contadorMinutos = 60;
        
        decrementarHoras();
    }
}

const decrementarHoras = () => {
    contadorHoras--;
    
    if (contadorHoras >= 0) {
        horas.innerText = contadorHoras + ' : ';
    } else {
        contadorHoras = 0;
    }
}

function mostrar(){
    console.log(inputSegundos);
}

