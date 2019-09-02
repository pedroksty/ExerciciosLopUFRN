<script>
var a = parseFloat(prompt("Digite o raio maior"))
var b = parseFloat(prompt("Digite o raio menor"))
var h = parseFloat(prompt("Digite a altura"))
var p = 3.14159265
var m = a-b
var g = (h*h + m*m)**(1/2)
var v1 = (p*h)/3
var v2 = a*a + a*b + b*b
var v = v1*v2
var A1 = p
var A2 = g*(a+b)
var A = A1*A2
alert("V: " + v + " e " + "A: " + A
</script>
