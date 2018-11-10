//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABS',
        numero: 1000
    }
}

//Destructuring
const { nome, idade} = pessoa
console.log(nome, idade)

//trocando o nome das variaveis
const { nome: n, idade: i } = pessoa
console.log(n ,i)

//pega dados que não exista, setando um deles para não dar undifined
const { sobrenoma, bemHumorada = true } = pessoa
console.log(sobrenoma, bemHumorada)

//acessar dado aninhados
const { endereco:{ logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//NÃO ACESSE DADOS ANINHADOS QUE NÃO EXISTA
const{ conta:{ag, num}} = pessoa
console.log(ag, num)