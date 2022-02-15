//DESAFIO3: dada um array de numeros inteiros, coloque os em ordem crescente
//DESAFIO: pegar o primeiro e o ultimo numero de um array com N numeros
var array = [44, 56, 2, 1, 99, 8, 5, 63, 4, 5, 2, 7, 89, 93, 4];

var crescente = array.sort();
var menorNumero = crescente[0];
var maiorNumero = crescente.at(-1);
var qtdadeNumeros = array.length;


function desafio3(param) {

    return console.log(`São ${qtdadeNumeros} numeros sendo estes: ${crescente}. Menor numero é ${menorNumero} maior numero é ${maiorNumero}`);

}

desafio3(array);



// console.log(`Numeros ${decrescente}`);





