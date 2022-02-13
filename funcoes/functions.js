
var statusCarro = ""
var startStop = false
var aceleracao = 0
var grausDeRotacao = 0

// se precisar RECEBER parametro de entrada numa FUNCAO, entaod eve-se declarar quais parametros nos parenteses
function ligarDesligar(startStop) {



    if (startStop === true && aceleracao === 0) {
        statusCarro = "ligado";
        console.log('O carro esta ligado')
    }else if(startStop === false){
        statusCarro = "desligado"
        console.log('O carro esta desligado')
        
    }else if(startStop === true && aceleracao !== 0){

        return console.log(`Cuidado o carro esta andando sozinho!`)

    }


}



//DESAFIO: so posso desligar o carro se a aceleracao for igal 0



function acelerar(incremento) {

    if (statusCarro === 'ligado'){

        aceleracao = aceleracao + incremento
        return console.log(`Acelracao é ${aceleracao}`)
        
    }else if(statusCarro === 'desligado') {
        return console.log('Não pode acelerado com o carro desligado')
    }
    
}



function frenarCarro(decremento) {

    
    if (aceleracao >0){
        
        aceleracao = aceleracao - decremento
        return console.log(`Desacelarado para ${aceleracao}`)

    }else if (aceleracao <=0 && statusCarro === "desligado"){
        
        return console.log('Não pode desacelerar com o carro desligado')
    }

    
}



//regra: se for um numero positivo vire a direito se for negativo vire a esquerda
function girarVolante(angulo) {
    grausDeRotacao = angulo

    if (grausDeRotacao < 0) {
        console.log(`Virando a direita`)
    } else if (grausDeRotacao > 0) {
        console.log(`Virando a esquerda`)
        
    }else if(grausDeRotacao === 0){
        console.log(`Volante parado`)
        
    }


    
    
    return console.log(`Angulo de ${grausDeRotacao}`)
    
}




ligarDesligar(false)
acelerar(0)
frenarCarro(12)
girarVolante(30)

//DESAFIO: um carro só pode acelerar se o carro estiver ligado
//DESAFIO: um carro so pode desacelerar se estiver ligado