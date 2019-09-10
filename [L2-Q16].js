var a = parseFloat(prompt("Digite: "))
var b = parseFloat(prompt("Digite: "))
var c = parseFloat(prompt("Digite: "))
if (a < c+b) {
    if (b < c+a) {
        if(c < b+a) {
            if (b==a && a==c && c==b) {
                alert(`Equilatero`)
            } else if (a==b || a==c || c==b) {
                    alert(`Isosceles`)
                    } else if (a!=b && b!=c && c!=a) {
                            alert(`Escaleno`)
                            }
                     
                } else {
                    alert(`Nao eh triangulo`)
                }
            }   
}
