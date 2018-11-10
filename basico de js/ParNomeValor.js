// par nome / valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    Idade: 32,
    Peso: 90,
    enderco: {
        logradouro: 'rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)