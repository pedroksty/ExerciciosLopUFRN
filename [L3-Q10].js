var m = parseInt(prompt("Digite: "))
var v = 0
while (m > 0.5) {
    m = m/2
    v = v + 50
}
var quo = parseInt(v/60)
var res = parseInt(v%60)
alert(`${quo} minutos e ${res} segundos`)
