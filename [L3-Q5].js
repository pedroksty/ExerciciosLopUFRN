var d = 0
var x = 3
while (x != 0) {
    var x = parseInt(prompt("Digite: "))
    if (x != 0) {
    if (x%3 == 0 || x%7 == 0) {
        d = d+1
    }
    }
}
alert(d)
