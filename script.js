let quien = ['Un chico ', 'Un perro ', 'Mi gato ', 'Un ladron '];
let accion =  ['se comió ', 'meó ', 'robó ', 'destruyó ', 'mojó '];
let elQue = ['mi tarea ', 'mi carro ', 'tu teléfono ', 'tu comida '];
let cuando = ['hace un momento ', 'ayer ', 'mientras comia ', 'mientas cuidaba a mi nieto ', 'ayer '];

var arrayDeExcusas = [quien, accion, elQue, cuando];

function generadorDeExcusas(array){
    let excusa = "";
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < 1; j++){
            excusa += array[i][parseInt(Math.random() * array[i].length)];
        }
    }
    return excusa;
}

//-------------------------------------------------------------------------------------

let excusaPrincipal = ['El chico volo y destruyo un auto con su rasho laser ','shrek vino a mi casa anoche ', 'estaba completamente sumido en el codigo '];
let continuacionDeExcusa = ['por eso no pude ir a la cena', 'por eso no pude ayudarte', 'por eso no entregue el trabajo a tiempo'];

let arrayMejoresExcusas = [excusaPrincipal, continuacionDeExcusa];

function mejorGenerador (otherArray){
    let mejorExcusa = "";
    for(let i = 0; i < otherArray.length; i++){

        for(let j = 0; j < 1; j++){
            mejorExcusa += otherArray[i][parseInt(Math.random() * otherArray[i].length)];
        }
    }
    return mejorExcusa;
}

document.getElementById("excuse").innerHTML = generadorDeExcusas(arrayDeExcusas);
document.getElementById("better_excuse").innerHTML = mejorGenerador(arrayMejoresExcusas);