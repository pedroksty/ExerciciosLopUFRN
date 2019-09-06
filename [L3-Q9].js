var c = 1
var nn1 = 0
while (c != 0) {
    var n1 = parseFloat(prompt("Digite: "))
    if (n1 >= 0 && n1 <= 10) {
        nn1 = nn1 + n1
        c = 0
    } else {
        c = 1 
    }
}
var x = 1
var nn2 = 0
while (x != 0) {
    var n2 = parseFloat(prompt("Digite: "))
    if (n2 >= 0 && n2 <= 10) {
        nn2 = nn2 + n2
        x = 0
    } else {
        x = 1
    }
}
var res = (nn1+nn2)/2
alert(res)
