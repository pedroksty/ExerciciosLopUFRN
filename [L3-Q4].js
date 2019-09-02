var c = 31
while (c < 1 || c > 30) {
    c = parseInt(prompt("Digite: "))
    if (c >= 1 && c <= 30) {
        alert("1")
    } else {
        alert("0")
    }
}
