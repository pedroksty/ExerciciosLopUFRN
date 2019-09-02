var c = 1
var x = 0
var c1 = 0
while ( c !=0 ) {
    var c = parseInt(prompt("Digite: "))
    if (c != 0) {
        if (c%2 == 1 && c > 15) {
            x += 1
        }
        c1 += 1
    }
}
var r = (x/c1)*100
alert(`${r}%`)
