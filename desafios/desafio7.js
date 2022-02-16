//DESAFIO : calcular a media entre um array


function CalcularMedia(notas) {
    
    var array = notas;
    var contador = 0;
    var soma = 0;
    var tamanhoArray = array.length;
    
    for (contador; contador < tamanhoArray; contador++) {

        var valorPosicao = array[contador];
        soma = soma + valorPosicao;
        var acumulo = acumulo + valorPosicao;
    }

    var media = (soma / tamanhoArray)
    console.log(`Media de ${media}`);
}

CalcularMedia([1, 2, 3, 2.09, 3.3, 2.2, 6.7, 8, 2, 4]);