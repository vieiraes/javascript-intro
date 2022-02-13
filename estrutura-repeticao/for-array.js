var lista = ["Faithon", "Gulandino", "Nestilson", "Javaiane", "Redisson", "Queryane"];
var arrayFrases = []
var tamListaNomes = lista.length


for (var indice = 0; indice < tamListaNomes; indice++) {

    var mensagem = `Boas Vindas, ${lista[indice]} ! `
    arrayFrases.push(mensagem);
    console.log(mensagem);
    console.log(arrayFrases);


}


// DESAFIO: colocar todos resultados das frases dentro de um array