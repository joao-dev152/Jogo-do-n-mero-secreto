// Imprimi uma mensagem de boas vindas na tela
alert('Boas vindas ao jogo do número secreto');

// variáveis que guardam os valores do número secreto, do chute do jogador, do número de tentativas e outras
let NumeroMax = 500;
let NumeroSecreto = parseInt(Math.random() * NumeroMax + 1);
console.log(NumeroSecreto)
let Chute;
let tentativas = 1;

// enquanto o chute for diferente do número secreto
while (Chute != NumeroSecreto) {
    Chute = prompt(`Escolha um número entre 1 e ${NumeroMax}`);
    // se chute for igual ao número secreto
    if (Chute == NumeroSecreto) {
        break;
    }
    else {
        alert('Você errou! :(');
        if (Chute > NumeroSecreto) {
            alert(`O número secreto é menor que ${Chute}`);
    }
        else {
        alert(`O número secreto é maior que ${Chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas ++;
    }
}

// mostra que você acertou e controla o português da mensagem
let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí você descobriu o número secreto ${NumeroSecreto} com ${tentativas} ${PalavraTentativa}`);