var p = parseFloat(prompt("Digite o peso: "))
var h = parseFloat(prompt("Digite a altura: "))
var imc = p/Math.pow(h,2)
if (imc<18.5) {
    alert("Abaixo do peso")
} else if (imc>=18.5 && imc<25) {
    alert("Peso normal")
} else if (imc>=25 && imc<30) {
    alert("Sobrepeso")
}  else if (imc>=30) {
    alert("Obesidade")
}
