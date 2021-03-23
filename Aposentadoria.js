const nome = 'Paulo';
const idade = 60
const sexo = 'feminino'
const contribuição = 25

const aposentadoria = idade + contribuição


if (sexo == 'feminino') {

    if (aposentadoria >= 85) {
        console.log(`${nome} Você poderá se aposentar`)

    } else {
        console.log(`${nome} Você não poderá se aposentar`)
    }
} else

if (sexo == 'masculino')

    if (aposentadoria >= 95) {
        console.log(`${nome} Você poderá se aposentar`)
    } else {
        console.log(`${nome} Você não poderá se aposentar`)
    }