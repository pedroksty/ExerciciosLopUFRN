var h = parseFloat(prompt("Digite a altura: "))
var p = parseFloat(prompt("Digite o peso: "))
var imc = p/Math.pow(h,2)
if (imc>24.9) {
    alert("acima")
}
