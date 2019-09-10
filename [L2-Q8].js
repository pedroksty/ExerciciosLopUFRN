var x = parseFloat(prompt("Digite: "))
if (x%3 == 0 && x%4 ==0 && x%5 == 0) {
    alert(`Divisivel por 3 \n Divisivel por 4 \n Divisivel por 5`)
} else if (x%3 == 0 && x%4 ==0) {
    alert(`Divisivel por 3 \n Divisivel por 4`)
} else if (x%3 == 0 && x%5 ==0) {
    alert(`Divisivel por 3 \n Divisivel por 5`)
} else if (x%4 == 0 && x%5 ==0) {
    alert(`Divisivel por 4 \n Divisivel por 5`)
} else if (x%3 == 0) {
    alert(`Divisivel por 3`)
} else if (x%4 == 0) {
    alert(`Divisivel por 4`)
} else if (x%5 == 0) {
    alert(`Divisivel por 5`)
} else {
    alert(`Nao eh divisivel`)
}
