var a = parseInt(prompt("Digite: "))
var b = parseInt(prompt("Digite: "))
var c = 0
while (a <= b) {
    var a = (a*0.035)+a
    var b = (b*0.01)+b
    c += 1
}
alert(c)
