function verificaChute(chute) {
    const numero = +chute;

    if (isNaN(numero)) {
        elementoChute.innerHTML += '<div>Chute inválido. Por favor, diga um número.</div>';
    } else if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}.</div>
        `;
    } else if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = `
            <div class="size-element">Você disse:</div>
            <span class="box">${chute}</span>   
            <div class="fontElement">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML = `
            <div class="size-element">Você disse:</div>
            <span class="box">${chute}</span> 
            <div class="fontElement">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})
