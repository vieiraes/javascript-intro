var caixa = 'roupas';
let titulo = 'Variaveis e Constantes';


//RESTO; é muito utilizado para verificar se um numero é par ou nao


function verificaPar(valor1, valor2){

    resultado = valor1 % valor2
    if (resultado !== 0){
        console.log(`Os numeros não sao divisiveis, resta ${resultado}`)
    }else if (resultado === 0){
        console.log(`Os numeros sao divisiveis`)
    }

}

verificaPar(23,9)
