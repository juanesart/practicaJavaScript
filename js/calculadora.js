// Calculadora

const pantalla = document.getElementById('pantalla');
const teclas = document.getElementById('teclas');
const resultado = document.getElementById('resultado');
let estadoOperacion = false;
let numero1;
let tipoOperacion;

resultado.textContent = '0';

teclas.addEventListener('click', identificar =>{
    const t = identificar.target;
    const d = t.dataset;
    if (d.number) {
        writeScreen(d.number);
    }
    if (d.math) {
        getOperation(t, d.math);
    }
    if (d.operation) {
        runOperation(d.operation);
    }
});   


const writeScreen = numero => {
    if (resultado.textContent === '0' || estadoOperacion === true) {
        resultado.textContent = numero;
    }else{
        resultado.textContent += numero;
    }
    estadoOperacion = false;    
}
const getOperation = (elemento, signo) => {
    estadoOperacion = true;
    numero1 = Number(resultado.textContent);
    tipoOperacion = signo;
    resultado.textContent = elemento.textContent;
}

const runOperation = (operation) => {
    const getResult = (numero1,tipoOperacion) =>{
        numero2 = Number(resultado.textContent);
        switch (tipoOperacion) {
            case 'add':
                resultado.textContent = numero1 + numero2;
                break;
            case 'minus':
                resultado.textContent = numero1 - numero2;
                break;
            case 'multiply':
                resultado.textContent = numero1 * numero2;
                break;
            case 'divide':
                if (numero2 == 0) {
                    resultado.textContent = 'La división por 0 no está contemplada';
                }else{
                    resultado.textContent = numero1 / numero2;
                }                
                break;
            default:
                break;
        }
    }
    if (operation === 'clear'){
        resultado.textContent = '0';
    }else{
        getResult(numero1,tipoOperacion);
    }
    estadoOperacion = true;
}