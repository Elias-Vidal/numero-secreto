function VerificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
       elementoChute.innerHTML +='<div> Valor Invalido</div>'
       return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `
    <div>Valor Invalido: Fale um numero entre ${menorValor} e
    ${maiorValor}</div>`
    return
    }
    
    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Voce Acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}
        `
    }else if(numero>numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML +=`
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    }




function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}