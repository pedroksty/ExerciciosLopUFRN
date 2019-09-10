var a = parseFloat(prompt(`Digite:`))
var b = parseFloat(prompt("Digite:"))
var c = parseFloat(prompt("Digite:"))
var d1 = (b)**2-4*a*c
var d = d1**(1/2)
var x1 = ((b)*-1+d)/2*a
var x2 = ((b)*-1-d)/2*a
if (d>0) {
    alert(`X1: ${x1} e X2: ${x2}`)
} else if (d==0) {
    alert(`X: ${x1}`)
} else if (d1<0) {
    alert(`Nenhuma raiz`)
}
