//DESAFIO2: calcule a soma de um array de numeros inteiros

function desafio2(numeros = []) {

    // var contador = 0
    // var posicao = numeros.length
    var array = numeros;
    var soma = 0;
    var contador = 0;
    var numeroItemsArray = array.length;


    //console.log(`${numeroItemsArray}`);
    
    for (contador; contador < numeroItemsArray; contador++) {
        
        // var resultado; 
        var posicao = array[contador];
        //var resultado = posicao;
        
        console.log(posicao);
    }

}

desafio2([1, 2, 3, 4, 4, 52, 6, 6]);



//DESAFIO AINDA NAO ESTA PRONTO