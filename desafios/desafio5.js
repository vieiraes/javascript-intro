//DESAFIO: fazer un contador ate 100 e quando chegar em 100 exibir a mensagem "chegou no fim"
//DESAFIO: os valores inciial e finais nao saõ pre-estabelecidos

function contar(initialNumber, endNumber) {

    const inicio = initialNumber;
    const fim = endNumber;
    
    var contador = inicio;
    var arrayRange = [];

    for (contador; contador <= fim; contador++) {

        arrayRange.push(contador);
        if(contador === fim){

            console.log(`Temos o resultado ${arrayRange}`);
            
        }else if(contador != fim){
           // console.log(`Ainda nao é ${arrayRange}`);
            
        }
    }


}

contar(1, 1);
//console.log(`Saí da function por um return`);