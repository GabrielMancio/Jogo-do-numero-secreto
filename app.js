let listaDeNumerosSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        console.log('Acertou!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número é maior.');
        }
          else {
            exibirTextoNaTela('p', 'O número é menor.');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
    exibirTextoNaTela('h1', 'Jogo do número secreto');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
//----------------------------------------------------------------------------
//Exercícios
//
// function alerta() {
//     let v1 = parseInt(prompt('Digite um número inteiro: '));
//     let v2 = parseInt(prompt('Digite outro número inteiro: '));
//     let resultado = v1 + v2;
//     alert(`A soma de ${v1} com ${v2} é igual a ${resultado}.`);
// }

// function calculoDobro(numero) {
//     return (numero * 2);
// }
    

// let resultado = calculoDobro(10);
// console.log(resultado);

// function calculoMedia(n1, n2, n3) {
//     let n4 = n1 + n2 + n3;
//     return parseInt(n4 / 3);
// }

// let resultadoB = calculoMedia(2, 2, 5);
// console.log(resultadoB);

// function retornaMaior(numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1;
//     }
//     else {
//         return numero2;
//     }
// }

// let numeroFinal = retornaMaior(8, 5);
// console.log(numeroFinal);

// function retornaEleMesmo(number) {
//     return number * number;
// }

// let resultadoC = retornaEleMesmo(4);
// console.log(resultadoC);

// function calculoImc(altura, peso) {
//     return peso / (altura * altura);
// }

// let imc = calculoImc(1.80, 70);
// console.log(imc);

// function calculoFatorial(numero) {
//     let fatorial = numero - 1;
//     while (fatorial > 0) {
//         numero = fatorial * numero;
//         fatorial --;
//     }
//     return numero;
// }

// let fatorialFinal = calculoFatorial(5);
// console.log(fatorialFinal);

// function converteDolar(dolar) {
//     return dolar * 4.8;
// }

// let cotacao = converteDolar(10);
// console.log(cotacao);

// function area(a, b){
//     let area = a * b;
//     return area;
// }

// function perimetro(a, b) {
//     let perimetro = 2 * (a + b);
//     return perimetro;
// }

// let resultadoArea = area(5,10);
// console.log(resultadoArea);

// let resultadoPerimetro = perimetro(5,10);
// console.log(resultadoPerimetro);

// function tabuada(numero) {
//     let contador = 1;
//     let resultado;
//     while (contador <= 10) {
//         resultado = numero * contador;
//         console.log(`${numero} X ${contador} = ${resultado}`);
//         contador++;
//     }
// }

// tabuada(10);

// let listaGenerica = [];

// let linguagensDeProgramacao = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// console.log(linguagensDeProgramacao.length);

// let nomes = ['Gabriel', 'Nathália', 'Laís'];
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[nomes.length - 1]);
