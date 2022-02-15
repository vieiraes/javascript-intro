// //DESAFIO: 
// menor ou igalç a 1945 e menor que 1964 Boomers
// maior que 1964 e menor que 1980 Geracao X 
// maior que 1980 e menor que 1996 milleniasl
// maior que 1996 Geracao z


function boomers() {

    console.log('Geração Boomers');
}

function geracaoX() {

    console.log('Geração X');


}
function millenials() {

    console.log('Geração Millenials');


}

function geracaoZ() {

    console.log('Geração Z');

}


function chamarGeracoes(anoNascimento) {

    if (anoNascimento >= 1945 && anoNascimento <= 1964) {
        return boomers();

    } else if (anoNascimento > 1946 && anoNascimento <= 1980) {
        return geracaoX();

    } else if (anoNascimento > 1980 && anoNascimento <= 1996) {
        return millenials();
    
    } else if (anoNascimento > 1996) {
        return geracaoZ();
    }else{
        console.log('Nao especificado');
    }

}

chamarGeracoes(123);