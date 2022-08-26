let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let resultado = document.getElementById("resultado")

let respostas = []

function limpar() {
    altura.value = 0
    peso.value = 0
    resultado.value = 0
}

function calcular() {
    imc = peso.value / Math.pow(altura.value, 2)
    resultado.value = imc
    respostas.push(imc)
    console.log(respostas)
}