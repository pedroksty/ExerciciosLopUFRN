var p = parseInt(prompt("digite:"))
var u = parseInt(prompt("digite:"))
var c1 = 1
var c2 = 0
var  cont = 1
while (cont<=u){
    c2 = cont*cont
    if (cont >= p){
        if (cont==1){
            alert(1+" ")
        }
        else{
            alert(`${c1}/${c2} `)
        }
    }
    c1 = c1+2
    cont++ 
}
