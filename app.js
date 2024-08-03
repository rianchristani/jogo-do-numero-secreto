let listaDeNumerosSorteados = [];
let limiteDaLista = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

/* let titulo= document.querySelector ('h1');
titulo.innerHTML = 'Jogo núemro secreto';

let paragrafo = document.querySelector ('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10'; */

//FUNÇÃO COM PARAMETRO
function exibirTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial()

function mensagemInicial(){
exibirTela ('h1', 'Jogo do número secreto');
exibirTela ('p', 'Escolha um número entre 1 e 10')
}

//FUNÇÃO SEM PARAMETRO
function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Parabéns! Você descobriu o número 
        secreto com ${tentativas} ${palavraTentativa}`
        exibirTela('h1', 'Acertou!')
        exibirTela ('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTela('p','O número é menor!')
        } else {
            exibirTela('p', 'O número é maior!')
        } tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
       let numeroEscolhido = parseInt(Math.random() * limiteDaLista + 1);
       let quatidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

       if (quatidadeDeNumerosNaLista == limiteDaLista){
        listaDeNumerosSorteados = [];
       }

       if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
       } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido;
       }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}