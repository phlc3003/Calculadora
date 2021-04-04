var operacao = prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar ou 4 para dividir:")
var primeiroValor = parseFloat(prompt("Digite o primeiro valor do cálculo:"))
var segundoValor = parseFloat(prompt("Digite o segundo valor do cálculo:"))

if(operacao == 1){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}
else if(operacao == 2){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}
else if(operacao == 3){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}
else if(operacao == 4){
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}
else{
  document.write("<h2>Opção Inválida</h2>")
}