///saber quem foi a primeira
//remover um nome
//atualizar um nome
var listaDeNome = ["Faithon", "Gulandino","Nestilson","Javaiane","Redisson","Queryane"];

// console.log(listaDeNome[2])


//adicionar um novo nome no final
listaDeNome.push("Maradebe")


//array.join troca a comma como separador entre os valores 
var separador = listaDeNome.join(' - ')
console.log(separador);

//saber quantas pessoas no array
var tamanhoListaDeNomes = listaDeNome.length

// pega a ultima posicao
var ultimoValor = listaDeNome[listaDeNome.length -1]

console.log(ultimoValor);

//typeof(listaDeNome);;
// console.log(typeof(listaDeNome.indexOf("Faithon",listaDeNome.length)));
// console.log(tamanhoListaDeNomes,listaDeNome);
