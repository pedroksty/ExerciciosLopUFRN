var dia = parseInt(prompt("Digite: "))
var x = dia%7
if(dia<=365){
switch(x) {
    case 1:
        alert("terca-feira")
        break
    case 2:
        alert("quarta-feira")
        break
    case 3:
        alert("quinta-feira")
        break
    case 4:
        alert("sexta-feira")
        break
    case 5:
        alert("sabado")
        break
    case 6:
        alert("domingo")
        break
    case 0:
        alert("segunda-feira")
        break
} 
} else {
    alert(`2013 possui apenas 365 dias`)
}
