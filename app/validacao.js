function VerificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        console.log('Valor invalido')
    }
    
}

function newFunction(numero) {
    return Number.isNaN(numero)
}
