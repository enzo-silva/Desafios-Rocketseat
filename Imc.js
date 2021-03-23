const nome = 'Daniel';
const idade = 52
const peso = 109
const altura = 1.90


const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você está abaixo do peso`)

}