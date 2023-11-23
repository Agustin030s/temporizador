const segundos = document.getElementById('segundos');
const minutos = document.getElementById('minutos');
const horas = document.getElementById('horas');

const btnPausar = document.querySelector('#btnPausar');
const btnReset = document.querySelector('#btnReset');

const formTemporizador = document.getElementById('formTemporizador');

let intervalId;

let contadorSegundos;
let contadorMinutos;
let contadorHoras;

const decrementarSegundos = () => {
    document.querySelector('#inputSegundos').value = "";
    document.querySelector('#inputMinutos').value = "";
    document.querySelector('#inputHoras').value = "";

    if (contadorSegundos > 0) {
        contadorSegundos--;
        segundos.innerText = contadorSegundos;
    } else if (contadorMinutos > 0 || contadorHoras > 0) {
        if (contadorMinutos === 0 && contadorHoras > 0) {
            contadorMinutos = 60;
            decrementarHoras();
        } else if (contadorMinutos > 0) {
            // contadorMinutos--;
            contadorSegundos = 60;
            decrementarMinutos();
        }
    } else {
        clearInterval(intervalId);
    }
}

const decrementarMinutos = () => {
    contadorMinutos--;
    minutos.innerText = contadorMinutos + ' : ';
}

const decrementarHoras = () => {
    contadorHoras--;
    horas.innerText = contadorHoras + ' : ';
}

const verificarHoras = (horasInput) =>{
    if(!isNaN(horasInput)){
        horas.innerText = horasInput + ' : ';
    }else{
        contadorHoras = 0
        horas.innerText = '00 :';
    }
}

const verificarMinutos = (minutosInput) =>{
    if(!isNaN(minutosInput)){
        minutos.innerText = minutosInput + ' : ';
    }else{
        contadorMinutos = 0;
        minutos.innerText = '00 :';
    }
}

const verificarSegundos = (segundosInput) =>{
    if(!isNaN(segundosInput)){
        segundos.innerText = contadorSegundos;
    }else{
        contadorSegundos = 0;
        segundos.innerText = '00';
    }
}

const pausarTemporizador = () =>{
    clearInterval(intervalId);
}

const resetTemporizador = () =>{
    clearInterval(intervalId);
    contadorSegundos = 0;
    contadorMinutos = 0;
    contadorHoras = 0;
    segundos.innerText = '00';
    minutos.innerText = '00 : ';
    horas.innerText = '00 : ';
}

const iniciarTemporizador = (e) =>{
    e.preventDefault();
    contadorSegundos = parseInt(document.querySelector('#inputSegundos').value);
    contadorMinutos = parseInt(document.querySelector('#inputMinutos').value);
    contadorHoras =parseInt(document.querySelector('#inputHoras').value);

    verificarHoras(contadorHoras);
    verificarMinutos(contadorMinutos);
    verificarSegundos(contadorSegundos);
    
    intervalId = setInterval(decrementarSegundos, 1000);
}

formTemporizador.addEventListener('submit', iniciarTemporizador);
btnPausar.addEventListener('click', pausarTemporizador);
btnReset.addEventListener('click', resetTemporizador);

