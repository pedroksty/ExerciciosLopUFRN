var x, y, n = parseInt(prompt("Digite: ")), c = 0, soma;
x = 0
y = 1
soma = y
for(var c = 0; c < n; c++) {
    alert(`${soma} `)
    soma = x + y
    x = y
    y = soma
}
