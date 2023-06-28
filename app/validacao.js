function VerificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
       elementoChute.innerHTML +='<div> Valor Invalido</div>'
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
    console.log(`valor invalido:numero secreto precisa estar 
    entre ${menorValor} e ${maiorValor}`)

    }
    
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}