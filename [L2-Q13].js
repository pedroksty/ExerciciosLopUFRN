var ano = parseInt(prompt("Digite"))
var b = ano%4
var c = ano%100
var d = ano%400
if (d==0) {
        alert("Eh bissexto")
} else  if (b==0 && c!=0){
    alert(`Eh bissexto`)
} else {
    alert(`Nao eh bissexto`)
}
