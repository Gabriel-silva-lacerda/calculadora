const resultado = document.querySelector('#current-operation');
const igual = document.querySelector('#equal-btn');

function place(valor) {
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = '';
}

function cleanOne() {
    if(resultado.textContent) {
        let result = document.querySelector('.current-operation').innerHTML;
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function calc() {
    if(resultado != 'Erro') {
        document.querySelector('.current-operation').innerHTML = eval(resultado.innerHTML);
    }
}