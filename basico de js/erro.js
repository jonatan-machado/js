function tratarErroELancar(erro){
    //throw new Error('Erro')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimiNomeGritado(obj){
    try{//Tentar ver se ira ter alguma problema
        console.log(obj.name.toUpperCase()+ '!!!!!!!')
    }catch (e) { // tratar o erro
        tratarErroELancar (e)

    } finally { //sempre executa tanto quanto da ou não erro
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimiNomeGritado(obj)