
//Estos son los comentarios

/* 
1. Defino las variables.
*/
var numero1;
var numero2;

let suma = 0;
let resta = 0;
let division = 0;
let multiplicacion = 0;

const PI = 3.14216468;

/* 
2. Función: es un método o proceso que se repite
 */
function inicio(){
    numero1 = prompt('Introduce el Número 1: ');
    numero2 = prompt('Introduce otro Número: ');

    /* Pasar la cadena de texto a números */
    

    console.log('El primer número es: ' + numero1);//Concatenación

    console.log(`EL segundo número es: ${numero2}`);//Template
};

function sumar(){
    
    if (numero1 == " " && numero2 == " ") {
        alert("Cargar números por favor. Hacer clic en Iniciar");
    } else {
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
        suma = numero1 + numero2;
        console.log(suma);
    }

};

function restar(){
    if (numero1 == undefined && numero2 == undefined) {
        alert("Cargar números por favor. Hacer clic en Iniciar");
    } else {
        suma = numero1 - numero2;//uso las mismas variables en todos los resultados
        console.log(suma);
    }

};

function multiplicar() {
    
};

function dividir() {
    
};






















