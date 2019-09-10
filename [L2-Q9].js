var reais = parseFloat(prompt(`Digite o valor: `))
var rend1 = reais*0.04
var rend2 = reais*0.045
var rend3 = reais*0.05
if (reais<=1000) {
    alert(`Rendimento: ${rend1}`)
} else if (reais>1000 && reais<=5000) {
    alert(`Rendimento: ${rend2}`)
} else if (reais>5000) {
    alert(`Rendimento: ${rend3}`)
}     
