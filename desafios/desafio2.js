//DESAFIO2: calcule a soma de um array de numeros inteiros

function desafio2(numeros = []) {
    
    var array = numeros;
    var contador = 0;
    var soma = 0;
    
    var tamanhoArray = array.length;
    
    for (contador; contador < tamanhoArray; contador++) {
        
        var posicao = parseInt(array[contador]);
        var soma = soma + posicao;
    }
    console.log(`A soma do array é ${soma}`);

}

desafio2([1, 1, 1, 4, 4, 52, 6, 6]);



