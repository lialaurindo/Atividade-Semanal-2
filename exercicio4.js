// Exercicio 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

const aluguelCarro = 60.00
const aluguelKm = 0.15

let kmPercorrido = 900
let diasAlugados= 15
let custoCarro = aluguelCarro * diasAlugados
let custoKm = aluguelKm * kmPercorrido

let totalAluguel = (custoCarro + custoKm).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

console.log("Você percorreu " + (kmPercorrido) + "km durante " + (diasAlugados) + " dias. O valor a pagar pelo aluguel do carro é " + (totalAluguel) + ". Agradecemos por reservar com a gente! :)")

// Resultado esperado: Você percorreu 900km durante 15 dias. O valor a pagar pelo aluguel do carro é R$ 1.035,00. Agradecemos por reservar com a gente! :)
// Usando o atributo .toLocaleString para exercitar apresentar o resultado na moeda local