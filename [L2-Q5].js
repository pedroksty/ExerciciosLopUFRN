var agua = parseFloat(prompt("Digite:"))
var preço1 = agua*8.50
var preço2 = agua*11.50
if (agua<=20) {
    alert(`${preço1}R$`)
} else {
    alert(`${preço2}R$`)
}
