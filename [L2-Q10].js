var a = parseFloat(prompt("Digite: "))
var b = parseFloat(prompt("Digite: "))
var c = parseFloat(prompt("Digite: "))
if (a<b && a<c) {
    alert(`${a} eh o menor`)
} else if (b<c && b<a) {
    alert(`${b} eh o menor`)
} else if (c<a && c<b) {
    alert(`${c} eh o menor`)
}
