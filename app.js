let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1)? 'solo intento': 'intentos'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled')
    
    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego(){

limpiarCaja();
condicionesIniciales();

document.getElementById('reiniciar').setAttribute('disabled','true');
//document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales(){
    asignarTextoElemento('h1','ADIVINA EL NUMERO SECRETO!!!');
    asignarTextoElemento('p', `Para iniciar debes indicar un numero de 1  a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    return document.querySelector('#valorUsuario').value ='';
   }

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('h1','GAME OVER');
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{     
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
                //RECURSIVIDAD AQUI LA FUNICION SE LLAMA A SI MISMA, 
                //EN CASO DE QUE HAYA GENERADO 2 VECES CONSECUTIVAS 
                //EL MISMO NUMERO PSEUDOALEATORIO 
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
}

condicionesIniciales();