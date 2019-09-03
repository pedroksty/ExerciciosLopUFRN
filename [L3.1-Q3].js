var c = 1
var x = 0
var cont = 0
while (c != 0) {
    var c = parseInt(prompt("Digite: "))
    if (c != 0) {
        if (c > 15) {
        x += 1
        }   
    cont += 1
    }
}
var r = (x/cont)*100
alert(`${r}%`)
